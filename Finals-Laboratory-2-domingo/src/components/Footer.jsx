import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faGoogle } from '@fortawesome/free-brands-svg-icons';

export class Footer extends Component {
  render() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <p>&copy; 2024 My Footer</p>
                {/* Social Media Icons */}
                <div className="flex justify-end space-x-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGoogle} size="2x" />
                    </a>
                </div>
            </div>
        </footer>
    )
  }
}

export default Footer;
