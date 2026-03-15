<?php
$encoded_key = base64_encode('9d7687b0-7701-4d03-b534-4b0fe696e3d9');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mark Montilla</title>
    <meta name="description" content="Full-stack developer crafting modern digital experiences with clean code and thoughtful design.">
    <link rel="stylesheet" href="css/style.css?v=5">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
</head>

<body>

    <!-- NAV -->
    <nav class="nav">
        <div class="nav-inner">
            <a href="#" class="nav-logo"><span>Mark</span> Montilla </a>
            <div class="nav-links" id="nav-links">
                <a href="#about">About</a>
                <a href="#stack">Stack</a>
                <a href="#work">Work</a>
                <a href="#work">Contact</a>
                <a href="#contact" class="nav-cta">Let's Talk</a>
            </div>
            <button class="burger" id="burger" aria-label="Menu">
                <span></span><span></span><span></span>
            </button>
        </div>
    </nav>

    <!-- HERO -->
    <section class="hero">
        <div class="wrap">
            <div class="hero-grid">
                <div>
                    <h1 class="reveal d1">I'm <span>Mark</span> Montilla</h1>
                    <p class="hero-desc reveal d2">
                        <span class="typed" id="typed">Full-Stack Developer</span><span class="cursor"></span>
                        based in the Philippines — building clean, performant web experiences that people actually enjoy using.
                    </p>
                    <div class="hero-btns reveal d3">
                        <a href="mailto:hello@markmontilla.dev" class="btn-dark">
                            <i data-lucide="send" style="width:15px;height:15px;"></i> Get in Touch
                        </a>
                        <a href="#work" class="btn-outline">
                            <i data-lucide="layers" style="width:15px;height:15px;"></i> See My Work
                        </a>
                    </div>
                </div>
            </div>
    </section>

    <div class="wrap">
        <div class="line"></div>
    </div>

    <!-- ABOUT -->
    <section id="about">
        <div class="wrap">
            <p class="label reveal">About</p>
            <h2 class="title reveal">Building web solutions through code and creativity</h2>
            <p class="subtitle reveal">I enjoy turning ideas into functional and user-friendly web applications.</p>

            <div class="about-grid">
                <div class="reveal d1">
                    <div class="about-text">
                        <p>I graduated with a Bachelor's degree in Information Technology, where I developed a strong interest in web development and problem-solving through coding. During my studies, I worked on several web-based projects that strengthened my skills in building responsive and user-friendly websites.</p>
                        <p>As an aspiring web developer, I have hands-on experience using HTML, CSS, JavaScript, and PHP. I enjoy creating clean, functional designs and continuously improving my skills by learning new technologies and best practices in web development.</p>
                    </div>
                    <div class="pills">
                        <span>Clean Code</span>
                        <span>User-Friendly</span>
                        <span>Responsive</span>
                        <span>Web Development</span>
                        <span>Problem Solving</span>
                        <span>Continuous Learning</span>
                    </div>
                </div>

                <div class="values">
                    <div class="card val reveal d1">
                        <div class="val-icon">⚡</div>
                        <div>
                            <h4>Result Oriented</h4>
                            <p>I focus on delivering efficient and high-quality solutions that achieve tangible results.</p>
                        </div>
                    </div>

                    <div class="card val reveal d2">
                        <div class="val-icon">🎯</div>
                        <div>
                            <h4>Attention to Detail</h4>
                            <p>I focus on building clean, functional, and user-friendly interfaces.</p>
                        </div>
                    </div>

                    <div class="card val reveal d3">
                        <div class="val-icon">🤝</div>
                        <div>
                            <h4>Team Collaboration</h4>
                            <p>I value teamwork and communication to build better solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="wrap">
        <div class="line"></div>
    </div>

    <!-- TECH STACK -->
    <section id="stack">
        <div class="wrap">
            <p class="label reveal">Technical Skills</p>
            <h2 class="title reveal">Tools and technologies I work with</h2>
            <p class="subtitle reveal">My skills in web development, IT support, and digital tools.</p>

            <div class="tech-groups">

                <div class="reveal">
                    <div class="tech-group-label">Frontend Development</div>
                    <div class="chips">
                        <div class="chip">HTML5</div>
                        <div class="chip">CSS3</div>
                        <div class="chip">Bootstrap</div>
                        <div class="chip">Tailwind CSS</div>
                        <div class="chip">JavaScript</div>
                    </div>
                </div>

                <div class="reveal d1">
                    <div class="tech-group-label">Backend Development</div>
                    <div class="chips">
                        <div class="chip">PHP</div>
                        <div class="chip">MySQL</div>
                    </div>
                </div>

                <div class="reveal d2">
                    <div class="tech-group-label">Development Tools</div>
                    <div class="chips">
                        <div class="chip">Git</div>
                        <div class="chip">VS Code</div>
                        <div class="chip">Webmail</div>
                    </div>
                </div>

                <div class="reveal d3">
                    <div class="tech-group-label">IT & Network Skills</div>
                    <div class="chips">
                        <div class="chip">Network Troubleshooting</div>
                        <div class="chip">CCTV Installation</div>
                        <div class="chip">System Troubleshooting</div>
                        <div class="chip">Microsoft Outlook</div>
                        <div class="chip">Microsoft 365</div>
                    </div>
                </div>

                <div class="reveal d4">
                    <div class="tech-group-label">Design & Multimedia</div>
                    <div class="chips">
                        <div class="chip">Figma</div>
                        <div class="chip">Framer</div>
                        <div class="chip">Canva</div>
                        <div class="chip">Vegas Pro</div>
                        <div class="chip">Filmora</div>
                        <div class="chip">CapCut</div>

                    </div>
                </div>

            </div>
        </div>
    </section>
    <div class="wrap">
        <div class="line"></div>
    </div>

    <!-- PROJECTS -->
    <section id="work">
        <div class="wrap">
            <p class="label reveal">Portfolio</p>
            <h2 class="title reveal">Selected work</h2>
            <p class="subtitle reveal">Featured projects that I've designed and developed.</p>

            <div class="proj-grid">
                <div class="proj wide reveal">
                    <div>
                        <div class="proj-num">01</div>
                        <div class="proj-tag">Patient Management System</div>
                        <h4>Web-Based Appointment and Patient Management System in Barangay Health Center Anabu II-F</h4>
                        <p>A comprehensive web-based solution designed to streamline appointment scheduling and patient management for Barangay Health Center Anabu II-F. This system features user authentication, real-time appointment booking, patient record management, and administrative dashboard for healthcare providers.</p>
                        <div class="proj-tech"><span>PHP</span><span>Html</span><span>Css</span><span>Javascript</span><span>MySQL</span></div>
                    </div>
                    <div style="align-self:end;">
                        <a href="#" class="proj-link">View Project <i data-lucide="arrow-up-right" style="width:14px;height:14px;"></i></a>
                    </div>
                </div>

                <div class="proj reveal d1">
                    <div class="proj-num">02</div>
                    <div class="proj-tag">Enterprise Resource Planning </div>
                    <h5>Enterprise Resource Planning in Metro Truck Builders Inc. With Decision Support System</h5>
                    <p>An integrated ERP system with decision support capabilities for Metro Truck Builders Inc. This comprehensive solution includes appointment system, inventory management, financial tracking, production planning, and data-driven decision support tools to optimize business operations.</p>
                    <div class="proj-tech"><span>PHP</span><span>Html</span><span>Css</span><span>Javascript</span><span>MySQL</span><span>Stripe</span><span>Three.js</span></div>
                    <a href="#" class="proj-link">View Project <i data-lucide="arrow-up-right" style="width:14px;height:14px;"></i></a>
                </div>

                <div class="proj reveal d2">
                    <div class="proj-num">03</div>
                    <div class="proj-tag">Unit Management System</div>
                    <h5>Marielle Building Unit & Space Management System</h5>
                    <p>A comprehensive property management platform featuring appointment scheduling, CRM, analytics, leasing and maintenance modules, admin and tenant dashboards, unit management, and integrated payment gateway.</p>
                    <div class="proj-tech"><span>PHP</span><span>Html</span><span>Css</span><span>Javascript</span><span>MySQL</span><span>Paymongo</span></div>
                    <a href="#" class="proj-link">View Project <i data-lucide="arrow-up-right" style="width:14px;height:14px;"></i></a>
                </div>

                <div class="proj reveal d1">
                    <div class="proj-num">04</div>
                    <div class="proj-tag">Travel and Tours Management System</div>
                    <h5>Vantrippers Travel and Tours</h5>
                    <p>A full-featured travel platform with hotel accommodation, landing page, van rental management, booking system, and invoicing module.</p>
                    <div class="proj-tech"><span>Laravel</span><span>MySQL</span><span>Stripe</span></div>
                    <a href="#" class="proj-link">View Project <i data-lucide="arrow-up-right" style="width:14px;height:14px;"></i></a>
                </div>

                <div class="proj reveal d2">
                    <div class="proj-num">05</div>
                    <div class="proj-tag">Content Management System</div>
                    <h5>Marketing Website </h5>
                    <p>A content management system for Southmeats that allows administrators to easily manage product listings, update prices, and modify product information displayed on the website.</p>
                    <div class="proj-tech"><span>React Native</span><span>Firebase</span><span>TF.js</span></div>
                    <a href="#" class="proj-link">View Project <i data-lucide="arrow-up-right" style="width:14px;height:14px;"></i></a>
                </div>

                <div class="proj reveal d1">
                    <div class="proj-num">06</div>
                    <div class="proj-tag">Real Estate</div>
                    <h3>Izumi Residences</h3>
                    <p>A promotional real estate landing page for Izumi Residences designed to showcase available homes, highlight property features, and attract potential buyers through a clean and engaging website presentation.</p>
                    <div class="proj-tech"><span>PHP</span><span>MySQL</span><span>Javascript</span><span>WebSockets</span></div>
                    <a href="#" class="proj-link">View Project <i data-lucide="arrow-up-right" style="width:14px;height:14px;"></i></a>
                </div>

                <div class="proj reveal d2">
                    <div class="proj-num">07</div>
                    <div class="proj-tag">Vendor Accreditation </div>
                    <h3>JDC Group Vendor Accreditation System</h3>
                    <p>A vendor accreditation system designed to streamline the accreditation and management of suppliers across all company branches. The system includes vendor document management, financial analysis, and a scorecard evaluation feature to support efficient supplier assessment, review, and approval processes.</p>
                    <div class="proj-tech"><span>PHP</span><span>MySQL</span><span>Javascript</span><span>WebSockets</span></div>
                    <a href="#" class="proj-link">View Project <i data-lucide="arrow-up-right" style="width:14px;height:14px;"></i></a>
                </div>
            </div>
        </div>
    </section>

    <div class="wrap">
        <div class="line"></div>
    </div>


    <div class="wrap">
        <div class="line"></div>
    </div>


    <!-- CONTACT -->
    <section id="contact">
        <div class="wrap" style="max-width: 600px; margin: 0 auto; text-align: center;">
            <p class="label reveal">Contact</p>
            <h2 class="title reveal">Let's work together</h2>
            <p class="subtitle reveal" style="margin: 0 auto 40px; max-width: 100%;">Have a project in mind? Reach out and let's create something great.</p>

            <div class="tech-groups reveal d1" style="max-width: 600px; margin: 0 auto; text-align: left;">

                <form action="https://api.web3forms.com/submit" method="POST" style="display: flex; flex-direction: column; gap: 32px;">

                    <!-- Obscured Access Key via PHP -->
                    <input type="hidden" name="access_key" value="<?php echo base64_decode($encoded_key); ?>">
                    <input type="hidden" name="subject" value="New Portfolio Contact Form Submission">
                    <input type="hidden" name="redirect" value="https://web3forms.com/success">

                    <div>
                        <div class="tech-group-label">Your Name</div>
                        <input type="text" name="name" class="chip contact-input" placeholder="John Doe" required>
                    </div>

                    <div>
                        <div class="tech-group-label">Email Address</div>
                        <input type="email" name="email" class="chip contact-input" placeholder="john@example.com" required>
                    </div>

                    <div>
                        <div class="tech-group-label">Project Details</div>
                        <textarea name="message" class="chip contact-input" rows="4" style="resize: vertical; min-height: 120px;" placeholder="Tell me about your project..." required></textarea>
                    </div>

                    <button type="submit" class="btn-dark" style="width: 100%; justify-content: center; padding: 14px;">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <div class="wrap">
        <div class="line"></div>
    </div>

    <!-- FOOTER -->
    <footer>
        <div class="wrap">
            <div class="footer-grid">
                <div>
                    <div class="footer-logo">Mark Montilla <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" style="width:18px;height:18px;vertical-align:middle;margin-left:4px;display:inline-block;" aria-label="Meta Verified">
                            <path d="M19.998 3.094L14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v6.354h6.234L14.638 40l5.36-3.094L25.358 40l2.972-5.15h6.238v-6.354L40 25.359 36.905 20 40 14.641l-5.432-3.137V5.15h-6.238L25.358 0l-5.36 3.094z" fill="#0095F6" />
                            <path d="M17.204 27.166l-7.37-7.37 2.828-2.828 4.542 4.542 9.127-9.127 2.828 2.828-11.955 11.955z" fill="#fff" />
                        </svg></div>
                    <p class="footer-desc"></p>
                    <div style="display:inline-flex; align-items:center; gap:6px; font-size: 0.8rem; color: rgba(255,255,255,0.6); margin-top: 16px; margin-bottom: -4px;">
                        <i data-lucide="map-pin" style="width:14px;height:14px;"></i> Cavite, Philippines
                    </div>
                    <div class="socials">
                        <a href="#" aria-label="GitHub"><i data-lucide="github" style="width:16px;height:16px;"></i></a>
                        <a href="#" aria-label="LinkedIn"><i data-lucide="linkedin" style="width:16px;height:16px;"></i></a>
                        <a href="#" aria-label="Instagram"><i data-lucide="instagram" style="width:16px;height:16px;"></i></a>
                        <a href="#" aria-label="Facebook"><i data-lucide="facebook" style="width:16px;height:16px;"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Navigate</h4>
                    <a href="#about">About</a>
                    <a href="#work">Projects</a>
                    <a href="#certs">Work</a>
                    <a href="#contact">Contact</a>
                </div>
                <div class="footer-col">
                    <h4>Get in Touch</h4>
                    <a href="mailto:markguanmontilla@gmail.com">markguanmontilla@gmail.com</a>
                    <a href="#">Trece Martires Cavite, Philippines</a>
                </div>
            </div>
            <div class="footer-bar">&copy; 2026 Mark Montilla. All rights reserved.</div>
        </div>
    </footer>

    <!-- PROJECT MODAL -->
    <div id="project-modal" class="modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-body">
                <button class="modal-nav prev-btn" aria-label="Previous Image"><i data-lucide="chevron-left" style="width:24px;height:24px;"></i></button>
                <div class="modal-image-container">
                    <img id="modal-image" src="" alt="Project Preview">
                </div>
                <button class="modal-nav next-btn" aria-label="Next Image"><i data-lucide="chevron-right" style="width:24px;height:24px;"></i></button>
            </div>
            <div class="modal-footer">
                <div class="modal-footer-header">
                    <h3 id="modal-title">Project Title</h3>
                    <a href="#" id="modal-link" target="_blank" class="btn-dark modal-link-btn" style="display:none;">
                        <i data-lucide="external-link" style="width:14px;height:14px;"></i> Visit Website
                    </a>
                </div>
                <p id="modal-desc">Project Description</p>
                <div class="modal-indicators" id="modal-indicators"></div>
            </div>
        </div>
    </div>

    <script src="js/script.js"></script>
    <script>
        lucide.createIcons();
    </script>
</body>

</html>