// Function to show course details
function showCourseDetails(courseId) {
    var modal = document.getElementById('course-modal');
    var title = document.getElementById('course-title');
    var description = document.getElementById('course-description');

    // Example course data
    var courses = {
        course1: {
            title: 'Course 1',
            description: 'Detailed description of Course 1.'
        },
        course2: {
            title: 'Course 2',
            description: 'Detailed description of Course 2.'
        }
    };

    if (courses[courseId]) {
        title.textContent = courses[courseId].title;
        description.textContent = courses[courseId].description;
        modal.style.display = 'block';
    }
}

// Function to open the contact modal
function openContactModal() {
    document.getElementById('contact-modal').style.display = 'block';
}

// Function to close a modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modals when clicking outside the modal content
window.onclick = function(event) {
    var courseModal = document.getElementById('course-modal');
    var contactModal = document.getElementById('contact-modal');
    
    if (event.target === courseModal) {
        courseModal.style.display = 'none';
    }
    if (event.target === contactModal) {
        contactModal.style.display = 'none';
    }
};

// Handle form submission
function submitForm(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '!');
        document.getElementById('contact-form').reset(); // Clear the form
        closeModal('contact-modal'); // Close the contact modal
    } else {
        alert('Please fill out all fields.');
    }
}
