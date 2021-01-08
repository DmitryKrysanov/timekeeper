import React from 'react';
import {useDispatch} from 'react-redux';
import {signOut} from '../../redux/actions/authActions';
import PrimaryButton from '../UI/PrimaryButton';

export default function Settings() {
  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch(signOut());
  };
  return (
    <div>
      Settings
      <PrimaryButton
        isLoad={false}
        variant="contained"
        color="primary"
        type="button"
        onClick={onSignOut}
      >
        Sign Out
      </PrimaryButton>
    </div>
  );
}
