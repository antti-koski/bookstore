import { useState } from "react"
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"

function AddBook(props) {

    const [open, setOpen] = useState(false)
    const [book, setBook] = useState({ author: '', isbn: '', price: 0, title: '', year: 0 })

    const handleOpen = () => {
        setOpen(true)
    }

    const handleSave = () => {
        props.addBook(book)
        handleClose()
    }

    const handleClose = () => {
        setOpen(false)
    }

    const inputChanged = (event) => {
        setBook({ ...book, [event.target.name]: event.target.value })
    }

    return (
        <>
            <Button variant="outlined" onClick={handleOpen}>
                Add book
            </Button>
            <Dialog open={open}>
                <DialogTitle>New book</DialogTitle>
                <DialogContent>
                    <TextField
                        name="title"
                        value={book.title}
                        onChange={inputChanged}
                        margin="dense"
                        label="Title"
                        fullWidth
                    />
                    <TextField
                        name="author"
                        value={book.author}
                        onChange={inputChanged}
                        margin="dense"
                        label="Author"
                        fullWidth
                    />
                    <TextField
                        name="isbn"
                        value={book.isbn}
                        onChange={inputChanged}
                        margin="dense"
                        label="ISBN"
                        fullWidth
                    />
                    <TextField
                        name="year"
                        value={book.year}
                        onChange={inputChanged}
                        margin="dense"
                        label="Year"
                        fullWidth
                    />
                    <TextField
                        name="price"
                        value={book.price}
                        onChange={inputChanged}
                        margin="dense"
                        label="Price"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleClose}>Cancel</Button>
                    <Button color="primary" onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AddBook