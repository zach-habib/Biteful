import { Button, Card, CardActions, CardContent } from "@mui/material";
import './ConfirmPopup.css'

const ConfirmPopup = (props) => {
  return (
    <>
      <div className="confirm-popup-bg" />
      <div className="conform-popup-parent">
        <div className="confirm-popup-container">
          <Card sx={{ minWidth: 325 }}>
            <CardContent>
              <h3>Confirmation</h3>
              <p>Are you sure you want to delete this recipe?</p>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={props.onConfirm}>Yes</Button>
              <Button size="small" onClick={props.onCancel}>No</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  )
}

export default ConfirmPopup;