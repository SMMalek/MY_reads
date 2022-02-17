import React, {useEffect, useState} from "react";
import '../App.css'
import PropTypes from "prop-types";

const BookShelfChanger = (props) => {

    const [selected, setSelected] = useState(props.book.shelf)
    const [disableCR, setDisableCR] = useState(false)
    const [disableWR, setDisableWR] = useState(false)
    const [disableR, setDisableR] = useState(false)
    const [disableN, setDisableN] = useState(false)

    const seeDisabled = () => {
      switch (selected) {
        case 'currentlyReading':
        setDisableCR(true)
        setDisableWR(false)
        setDisableR(false)
        setDisableN(false)
          break;
        case 'wantToRead':
        setDisableCR(false)
        setDisableWR(true)
        setDisableR(false)
        setDisableN(false)
          break;
        case 'read':
        setDisableCR(false)
        setDisableWR(false)
        setDisableR(true)
        setDisableN(false)
          break;
        default:
        setDisableCR(false)
        setDisableWR(false)
        setDisableR(false)
        setDisableN(true)
          }
}

    const handleSelect = selectedOption => {
        setSelected(selectedOption.target.value)
        if (props.trace === "search" && selectedOption.target.value !== "none") {
            alert("Book added to the shelf")
        } else {
            if (props.trace === "search"){
            alert("Book deleted from the shelf")
            }
        }
        seeDisabled()
    }


    useEffect(() => {
        seeDisabled()
        props.selectReturn(selected, props.book)
    });


    return (
        <div className="book-shelf-changer">
            <select value={!selected ? 'none' : selected} onChange={handleSelect}>
                <option
                    value="DEFAULT"
                    disabled>
                    Move to...
                </option>
                <option
                    value="currentlyReading"
                    disabled={disableCR}
                    style={{fontWeight: selected === "currentlyReading" ? 900 : 400}}
                >
                    Currently Reading
                </option>
                <option
                    value="wantToRead"
                    disabled={disableWR}
                    style={{fontWeight: selected === "wantToRead" ? 900 : 400}}

                >
                    Want to Read
                </option>
                <option
                    value="read"
                    disabled={disableR}
                    style={{fontWeight: selected === "read" ? 900 : 400}}
                >
                    Read
                </option>
                <option
                    value="none"
                    disabled={disableN}
                    style={{fontWeight: !selected ? 900 : 400}}
                >
                    None / Remove
                </option>
            </select>
        </div>
    )
}

BookShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    selectReturn: PropTypes.func.isRequired,
    appList: PropTypes.array,
    trace: PropTypes.string.isRequired
}
export default BookShelfChanger
