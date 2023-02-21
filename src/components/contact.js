import { useEffect } from "../lib";

const Contact = () => {
  useEffect(() => {
    // Truy cập vào các ô input
    const form = document.getElementById("contact-form");
    const usernameEle = document.getElementById("name");
    const emailEle = document.getElementById("email");
    const phoneEle = document.getElementById("phone");
    const subjectEle = document.getElementById("subject");
    const commentEle = document.getElementById("comment");
    // Truy cập vào các ô span
    const errorNameEle = document.getElementById("error-name");
    const errorPhoneEle = document.getElementById("error-phone");
    const errorEmailEle = document.getElementById("error-email");
    const errorSubjectEle = document.getElementById("error-subject");
    const errorCommentEle = document.getElementById("error-comment");
    function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
    }
    function isPhone(number) {
      return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let usernameValue = usernameEle.value;
      let emailValue = emailEle.value;
      let phoneValue = phoneEle.value;
      let subjectValue = subjectEle.value;
      let commentValue = commentEle.value;

      // Validate dữ liệu trong các ô input và highlight
      // Kiểm tra trường username
      if (usernameValue.length == "") {
        errorNameEle.innerHTML = "Usename không được bỏ trống";
      } else {
        errorNameEle.innerHTML = "";
      }

      // Kiểm tra trường email
      if (emailValue.length == "") {
        errorEmailEle.innerHTML = "Email không được bỏ trống";
      } else if (!isEmail(emailValue)) {
        errorEmailEle.innerHTML = "Email không đúng định dạng";
      } else {
        errorEmailEle.innerHTML = "";
      }

      // Kiểm tra trường phone
      if (phoneValue.length == "") {
        errorPhoneEle.innerHTML = "Số điện thoại không được để trống";
      } else if (!isPhone(phoneValue)) {
        errorPhoneEle.innerHTML = "Số điện thoại không đúng định dạng";
      } else {
        errorPhoneEle.innerHTML = "";
      }

      // Kiểm tra trường subject
      if (subjectValue.length == "") {
        errorSubjectEle.innerHTML = "Chủ đề không được bỏ trống";
      } else {
        errorSubjectEle.innerHTML = "";
      }

      // Kiểm tra trường comment
      if (commentValue.length == "") {
        errorCommentEle.innerHTML = "Chủ đề không được bỏ trống";
      } else {
        errorCommentEle.innerHTML = "";
      }
    });
  });
  return `
  <section class="section" id="contact">
  <div class="container text-center">
      <p class="section-subtitle">How can you communicate?</p>
      <h6 class="section-title mb-5">Contact Me</h6>
      <!-- contact form -->
      <form action="" id="contact-form" class="contact-form col-md-10 col-lg-8 m-auto">
          <div class="form-row">
              <div class="form-group col-sm-6">
                  <input name="name" id="name" type="text" size="50" class="form-control" placeholder="Your Name" > 
                  <span style="color:red;" id="error-name"> </span>                
              </div>
              <div class="form-group col-sm-6">
                  <input id="email" type="email" class="form-control" placeholder="Your Email">                 
                  <span style="color:red;" id="error-email"> </span>  
                </div>
              <div class="form-group col-sm-6">
                  <input id="phone" type="text" class="form-control" placeholder="Your Phone">                 
                  <span style="color:red;" id="error-phone"> </span>                
              </div>
              <div class="form-group col-sm-6">
                  <input id="subject" type="text" class="form-control" placeholder="Subject">                 
                  <span style="color:red;" id="error-subject"> </span>                
                </div>
              <div class="form-group col-sm-12">
                  <textarea name="comment" id="comment" rows="6"   class="form-control" placeholder="Write Something"></textarea>
                  <span style="color:red;" id="error-comment"> </span>  
                </div>
              <div class="form-group col-sm-12 mt-3">
                  <input type="submit" value="Send Message" class="btn btn-outline-primary rounded">                  
              </div>
          </div>  
      </form><!-- end of contact form -->
  </div><!-- end of container -->
</section>
    `;
};
export default Contact;
