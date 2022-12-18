import { Snackbar,Alert } from "@mui/material";

export const SnackBar = ({ error, setError, errorMsg }) => {
    const handleClose = () => {
        setError(false);
    }
    return (
        <Snackbar
            open={error}
            autoHideDuration={4000}
            onClose={handleClose}>

            <Alert severity="warning">{errorMsg}</Alert>
        </Snackbar>
    )
}
