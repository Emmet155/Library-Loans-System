

// toggleAboutSection function toggles the visibility of the about section based on the show parameter.
// if show is true, it displays the about section and hides other sections.
// if show is false, it hides the about section and shows other sections.

function toggleAboutSection(show) {
  if (show) {
    // if show is true, show the about section
    $('#about').show();
    // also hide other sections
    $('#home, #events, #success-stories, #courses, #instructors, #contact').hide();
  } else {
    // if show is false, hide the about section
    $('#about').hide();
    // also show other sections
    $('#home, #events, #success-stories').show();
    // this ensures the courses section is hidden
    $('#courses, #instructors, #contact').hide();
  }
}

// toggleCoursesSection function toggles the visibility of the courses section based on the show parameter.
// if show is true, it displays the courses section and hides other sections.
// if show is false, it hides the courses section and shows other sections.

function toggleCoursesSection(show) {
  if (show) {
    // if show is true, show the courses section
    $('#courses').show();
    // also hide other sections
    $('#home, #about, #events, #success-stories, #instructors, #contact').hide();
  } else {
    // if show is false, hide the courses section
    $('#courses').hide();
    // also show other sections
    $('#home, #about, #events, #success-stories').show();
    // ensures the instructors and contact sections are hidden
    $('#instructors, #contact').hide();
  }
}

// toggleInstructorsSection function toggles the visibility of the instructors section based on the show parameter.
// if show is true, it displays the instructors section and hides other sections.
// if show is false, it hides the instructors section and shows other sections.

function toggleInstructorsSection(show) {
  if (show) {
    // if show is true, show the Instructors section
    $('#instructors').show();
    // also hide other sections
    $('#home, #about, #courses, #events, #success-stories, #contact').hide();
  } else {
    // if show is false, hide the Instructors section
    $('#instructors').hide();
    // also show other sections
    $('#home, #about, #courses, #events, #success-stories').show();
    // ensures the Contact section is hidden
    $('#contact').hide();
  }
}

// toggleContactSection function toggles the visibility of the contact section based on the show parameter.
// if show is true, it displays the contact section and hides other sections.
// if show is false, it hides the contact section and shows other sections.

function toggleContactSection(show) {
  if (show) {
    // if show is true, then show the contact section
    $('#contact').show();
    // Also hide other sections
    $('#home, #about, #courses, #events, #success-stories, #instructors').hide();
  } else {
    // if show is false, hide the contact section
    $('#contact').hide();
    // also show other sections
    $('#home, #about, #courses, #events, #success-stories').show();
    // ensures the Instructors section is hidden
    $('#instructors').hide();
  }
}

// the following code is executed when the document is fully loaded
$(document).ready(function() {
  // event listener for enroll form submission
  $("#enrollForm").submit(function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // get form values
    var name = $("#name").val();
    var email = $("#email").val();
    var course = $("#course").val();

    // you can perform validation here if needed
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Course:", course);

    // optionally, you can reset the form after submission
    // this.reset();
  });

  // this is the set maximum date for date of birth field so the user cant't select any days after today's date. 
  $('#dob').attr('max', new Date().toISOString().split('T')[0]);

  // this is an additional event listener for enroll form submission
  $("#enrollForm").submit(function(event) {
    // Prevent default form submission
    event.preventDefault();

    // this is the form validation logic here
    // this checks to see if required fields are filled

    // if the validation passes, you can submit the form.
    this.submit();
  });
});
