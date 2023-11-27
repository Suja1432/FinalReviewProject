import '../../assert/Footer.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
export default function Footer() {
	return (
		<footer class="footer">
			<div class="container">
				<div class="row">
					<div class="footer-col">
						<h4>company</h4>
						<ul>
							<li><Link to='/about'>about us</Link></li>
							<li><a href="#">our services</a></li>
							<li><a href="#">privacy policy</a></li>
							
						</ul>
					</div>
				
					<div class="footer-col">
						<h4>online shop</h4>
						<ul>
							<li><a href="#">EBook</a></li>
							
							<li><a href="#">Audio Books</a></li>
							<li><a href="#">Video Books</a></li>
						</ul>
					</div>
					<div class="footer-col">
						<h4>follow us</h4>
						<div class="social-links">
							<a href="https://www.instagram.com/sripriya_176/" target='blank'><FaInstagramSquare />
</a>
							<a href="https://www.linkedin.com/in/sripriya-g-984276257" target='blank'><FaLinkedin />
</a>
							<a href="https://youtube.com/@sri5242?si=bgQCmVJNvGQTusYm" target='blank'><FaYoutube />
</a>
	
						</div>
					</div>
				</div>
			</div>
		</footer>

	)
}