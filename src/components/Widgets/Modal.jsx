import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import history from "../../history";
import "./Modal.css";

class ModalWidget extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClose = this.handleClose.bind(this);
    this.handleLinkToViewProfile = this.handleLinkToViewProfile.bind(this);
  }

  handleClose() {
    this.props.closeModal();
  }

  handleLinkToViewProfile() {
    this.props.linkToViewProfile();
  }

  render() {
    let currentRoute = history.location.pathname;
    return (
      <div>
        <Modal show={this.props.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.message}</p>
            <p>
              <Link to="/">Return to Search Results</Link>
            </p>
            <p>
              <Link to={`/profile/${this.props.graduateId}`}>
                View Graduate Profile
              </Link>
            </p>
            {/\/profile\/add/.test(currentRoute) ? (
              <p>
                <Button bsStyle="link" onClick={this.handleLinkToViewProfile}>
                  Create a New Profile
                </Button>
              </p>
            ) : (
              <p>
                <Link to="/profile/add">Create a New Profile</Link>
              </p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button 
              onClick={this.handleClose}
              className="btn grad-btn grad-btn-admin grad-btn-admin-submit"
            >
              Continue Editing
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalWidget;
