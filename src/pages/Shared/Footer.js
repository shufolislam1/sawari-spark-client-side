import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Tire</a>
                    <a class="link link-hover">Hidrolik Break </a>
                    <a class="link link-hover">Engine Oil</a>
                    <a class="link link-hover">Chain</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer class="footer footer-center p-4 bg-neutral text-neutral-content">
                <div>
                    <p>Copyright © 2022 - All right reserved by SAWARI SPARK Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;