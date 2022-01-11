import { connect } from 'react-redux';
import { hideSnackbarNotification } from 'src/store/notification/notification.actions';

const mapStateToProps = (state) => ({
  notificationState: state.notification,
});

const mapDispatchToProps = (dispatch) => ({
  onHideSnackbarNotification: () => dispatch(hideSnackbarNotification()),
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
