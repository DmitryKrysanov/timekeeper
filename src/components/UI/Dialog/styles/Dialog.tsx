import styled from 'styled-components/macro';
import Dialog from '@material-ui/core/Dialog';

export const Container = styled(Dialog)`
  .MuiDialog-paper {
    padding: 24px 24px;
    border-radius: 24px;
  }

  .MuiBackdrop-root {
    background-color: rgba(63, 61, 86, 0.4);
  }
`;
