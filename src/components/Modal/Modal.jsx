import s from './Modal.module.scss';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Component } from 'react';

const modal = document.querySelector('#modal-root');

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.listenerKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.listenerKeyDown);
  }

  listenerKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };

  onClikCloseBackDrop = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.onClick();
    }
  };

  render() {  
    return createPortal(
      <div className={ s.backdrop } onClick={ this.onClikCloseBackDrop }>
        <div className={ s.modal }>{ this.props.children }</div>
      </div>,
      modal
    );
  }
}

export default Modal;

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
