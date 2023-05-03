import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

export default function Addblog() {
  const editorRef = useRef(null);
  // const id = uuid()
  const ini = "<h3>Start Writing Here with different formatting OPTIONS</h3>";

  const welcome =
    "<h3>Start Writing Here with different formatting OPTIONS</h3>";
  // const selectVal = useRef(null);
  const headVal = useRef(null);
  const userVal = useRef(null);
  var toastId = undefined;

  const handleSave = async () => {
    // const selectedValue = selectVal.current.value;
    const headingValue = headVal.current.value;
    const userValue = userVal.current.value;
    // console.log(`This is uuid ` + id)

    // if (headingValue === "") {
    // 	toast.error('Blog Heading cannot be empty')
    // 	return
    // }

    // if (headingValue.length > 42) {
    // 	toast.error('Blog Heading should be less than 42 charcters')
    // 	return
    // }

    // if (selectedValue === "0") {
    // 	toast.error('Please select a category for the blog')
    // 	return
    // }

    const eddata = editorRef.current.getContent();

    // if (editorRef?.current.getContent() === welcome) {
    // 	toast.error(`Data can't be submitted empty `)
    // 	return
    // }

    var today = new Date();

    const bloginfo = {
      user: userValue, //username
      heading: headingValue, //heading for blog
      data: eddata,
      publishDate: today, //editor data, all info
    };

    const docRef = await addDoc(collection(db, "blogs"), bloginfo);
    console.log(docRef.id);
    window.location.href = "http://localhost:8080/blog";

    // loader()
    // const res = await axios.post("http://localhost:4200/addblog", user)
    // toast.dismiss(toastId)

    // if (res.data.message === '1')
    // 	toast.success('Blog Updated Succesfully')

    // else if (res.data.message === '0')
    // 	toast.success('Blog Added Successfully')
    // else if (res.data.message === '-1')
    // 	toast.error('Connection Error')
  };

  return (
    <>
      <div className="container my-5 fund px-28 py-20 ">
        <h4>Add New Blog</h4>

        <div class="input-group my-3 ">
          <span class="input-group-text">Enter your Name</span>
          <input
            ref={userVal}
            placeholder="Write Here..."
            type="text"
            style={{ fontWeight: "bold", textTransform: "uppercase" }}
            aria-label="First name"
            class="form-control"
          />
        </div>

        <div class="input-group my-3 ">
          <span class="input-group-text">Heading for Blog</span>
          <input
            ref={headVal}
            placeholder="Write Here..."
            type="text"
            style={{ fontWeight: "bold", textTransform: "uppercase" }}
            aria-label="First name"
            class="form-control"
          />
        </div>

        {/* <select ref={selectVal} class="form-select form-select-sm mb-3 bg-dark text-white " aria-label=".form-select-lg example">
					<option selected value="0">Define Category</option>
					<option value="Indian Polity">Indian Polity</option>
					<option value="Geopolitics">Geopolitics</option>
					<option value="Indian History">Indian History</option>
					<option value="Economy">Economy</option>
					<option value="Geography">Geography</option>
					<option value="Politics">Politics</option>
					<option value="Tech">Tech</option>
					<option value="Personalities">Personalities</option>
				</select> */}

        <Editor
          ref={editorRef}
          // onChange={handleOnChange}
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={ini}
          init={{
            // setup: function (ed) {
            // 	ed.on('change', function (e) {
            // 		console.log('the event object ', e);
            // 		console.log('the editor object ', ed);
            // 		console.log('the content ', ed.getContent());
            // 	});
            // },
            // onchange_callback: "handleOnChange",
            selector: "textarea",
            height: 300,
            menubar: true,
            resize: true,
            images_file_types: "jpg,svg,webp",
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
              "autoresize",
            ],
            toolbar:
              "undo redo | formatselect | fontselect " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help" +
              "image",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />

        <div className="d-grid gap-2 col-6 mx-auto my-3">
          <button
            className="btn btn-success"
            onClick={handleSave}
            type="button"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}
