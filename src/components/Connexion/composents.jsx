const checkUserName = () => {
  if (userName) {
    <Link to="/networks">
      <input type="submit" value="connexion" onSubmit={handleSubmit} />
    </Link>;
  } else {
    <>
      <input type="submit" value="connexion" onClick={handleClick} />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          severity="error"
          onClose={handleClose}
          classeName={classes.alertStyles}
        >
          ce n&apos;est pas le bon nom !
        </Alert>
      </Snackbar>
    </>;
  }
};

const checkIfFilledField = () => {
  if (userName) {
    <Link to="/networks">
      <input type="submit" value="connexion" onSubmit={handleSubmit} />
    </Link>;
  } else {
    <>
      <input type="submit" value="connexion" onClick={handleClick} />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          severity="error"
          onClose={handleClose}
          classeName={classes.alertStyles}
        >
          ce champ doit être rempli !
        </Alert>
      </Snackbar>
    </>;
  }
};

export { checkIfFilledField, checkUserName };
