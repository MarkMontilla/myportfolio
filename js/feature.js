 const projectsData = [
            {
                images: ["assets/Anabu 1.PNG", "assets/Anabu 2.PNG", "assets/Anabu 3.PNG", "assets/Anabu 4.PNG", "assets/Anabu 5.PNG", "assets/Anabu 6.PNG", "assets/Anabu 7.PNG",
                    "assets/Anabu 8.PNG", "assets/Anabu 9.PNG", "assets/Anabu 10.PNG", "assets/Patient 1.PNG", "assets/Patient 2.PNG", "assets/Patient 3.PNG", "assets/Patient 4.PNG",
                    "assets/Patient 5.PNG", "assets/Patient 6.PNG", "assets/Patient 7.PNG", "assets/Admin 1.PNG", "assets/Admin 1.PNG", "assets/Admin 2.PNG", "assets/Admin 3.PNG", "assets/Admin 4.PNG", "assets/Patient 5.PNG",],

                title: "Web-Based Appointment and Patient Management System in Barangay Health Center Anabu II-F",
                description: "A comprehensive web-based solution designed to streamline appointment scheduling and patient management for Barangay Health Center Anabu II-F. This system features user authentication, real-time appointment booking, patient record management, and administrative dashboard for healthcare providers.",
                liveUrl: "#",
                techStack: ["HTML", "CSS and Bootstrap", "JavaScript", "PHP"]
            },
            {
                images: ["assets/Metro 19.PNG", "assets/Metro 20.PNG",
                    "assets/Metro 1.PNG", "assets/Metro 2.PNG", "assets/Metro 3.PNG", "assets/Metro 4.PNG", "assets/Metro 5.PNG",
                    "assets/Metro 6.PNG", "assets/Metro 7.PNG", "assets/Metro 8.PNG", "assets/Metro 9.PNG", "assets/Metro 10.PNG",
                    "assets/Metro 11.PNG", "assets/Metro 12.PNG", "assets/Metro 13.PNG", "assets/Metro 14.PNG", "assets/Metro 15.PNG",
                    "assets/Metro 16.PNG", "assets/Metro 17.PNG", "assets/Metro 18.PNG", "assets/Metro 21.PNG", "assets/Metro 22.PNG",
                    "assets/Metro 23.PNG", "assets/Metro 24.PNG", "assets/Customer 1.PNG", "assets/Customer 2.PNG", "assets/Customer 3.PNG",
                    "assets/Customer 4.PNG", "assets/Customer 5.PNG", "assets/Customer 6.PNG", "assets/Customer 7.PNG", "assets/Customer 8.PNG", "assets/Customer 9.PNG", "assets/Customer 10.PNG"
                ],

                title: "Enterprise Resource Planning in Metro Truck Builders Inc. With Decision Support System",
                description: "An integrated ERP system with decision support capabilities for Metro Truck Builders Inc. This comprehensive solution includes appointment system,  inventory management, financial tracking, production planning, and data-driven decision support tools to optimize business operations.",
                liveUrl: "https://metrotruckbuildersinc.com",
                techStack: ["HTML", "CSS and Bootstrap", "JavaScript", "PHP", "Stripe", "MySQL"]
            },
            {
                images: [
                    ...Array.from({ length: 27 }, (_, i) => `assets/Marielle ${i}.PNG`),
                    ...Array.from({ length: 6 }, (_, i) => `assets/Tenant ${i + 1}.PNG`),
                ],
                title: "Marielle Building Unit & Space Management System",
                description: "A comprehensive property management platform featuring appointment scheduling, CRM, analytics, leasing and maintenance modules, admin and tenant dashboards, unit management, and integrated payment gateway.",
                liveUrl: "https://mariellebuilding.online/",
                techStack: ["HTML", "CSS and Bootstrap", "JavaScript", "PHP", "Paymongo", "MySQL"]
            },


            {
                images: [...Array.from({ length: 17 }, (_, i) => `assets/Vantripper ${i + 1}.PNG`),],
                title: "Travel and Tours Management System",
                description: "A full-featured travel platform with hotel accommodation, landing page, van rental management, booking system, and invoicing module.",
                liveUrl: "#",
                techStack: ["HTML", "CSS and Bootstrap", "JavaScript", "PHP", "MySQL"]
            }
        ];

        let currentSlide = 0;
        let currentProject = null;

        function generateProjects() {
            const container = document.getElementById('projects-container');

            projectsData.forEach((project, index) => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card fade-in';

                projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.images[0]}" alt="">
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description.substring(0, 120)}...</p>
                <div class="tech-tags">
                    ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <button class="btn btn-dark project-link text-light" onclick="openModal(${index})">View Project</button>
                </div>
            </div>
        `;

                container.appendChild(projectCard);
            });
        }

        function openModal(projectIndex) {
            currentProject = projectsData[projectIndex];
            currentSlide = 0;

            // Populate modal content
            document.getElementById('modalTitle').textContent = currentProject.title;
            document.getElementById('modalDescription').textContent = currentProject.description;

            // Create carousel images
            const carousel = document.getElementById('imageCarousel');
            carousel.innerHTML = '';
            currentProject.images.forEach((image, index) => {
                const img = document.createElement('img');
                img.src = image;
                img.className = index === 0 ? 'active' : '';
                carousel.appendChild(img);
            });

            // Create dots
            const dotsContainer = document.getElementById('carouselDots');
            dotsContainer.innerHTML = '';
            currentProject.images.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.className = index === 0 ? 'dot active' : 'dot';
                dot.onclick = () => currentSlideIndex(index);
                dotsContainer.appendChild(dot);
            });

            // Create tech tags
            const techTags = document.getElementById('modalTechTags');
            techTags.innerHTML = currentProject.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('');

            document.getElementById('liveLink').href = currentProject.liveUrl;

            // Show modal
            document.getElementById('projectModal').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('projectModal').style.display = 'none';
        }

        function changeSlide(direction) {
            const images = document.querySelectorAll('#imageCarousel img');
            const dots = document.querySelectorAll('.dot');

            images[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');

            currentSlide += direction;

            if (currentSlide >= images.length) {
                currentSlide = 0;
            } else if (currentSlide < 0) {
                currentSlide = images.length - 1;
            }

            images[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        function currentSlideIndex(index) {
            const images = document.querySelectorAll('#imageCarousel img');
            const dots = document.querySelectorAll('.dot');

            images[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');

            currentSlide = index;

            images[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        // Event listeners
        document.querySelector('.close').onclick = closeModal;
        window.onclick = function (event) {
            if (event.target == document.getElementById('projectModal')) {
                closeModal();
            }
        }

        // Generate projects when page loads
        generateProjects();