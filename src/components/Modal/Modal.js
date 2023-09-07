import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { BackDrop, CloseBtn, Content, Icon } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <BackDrop onClick={this.handleBackdropClick}>
        <Content>
          <img src={this.props.url} alt='zoomed' />
          <CloseBtn type='button' onClick={this.props.onClose}><Icon/></CloseBtn>
        </Content>
      </BackDrop>,
      modalRoot
    );
  }
}
