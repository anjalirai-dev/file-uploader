import React from 'react';
import './FileUploader.css';

function FileUploader(){

	const handleSubmission = () => {
	};

	const changeHandler = () => {
	};




	return(
	   <div>
	   		<form>
	   			<h2 className="uploaderFormTitle">File Uploader:</h2> 
	   			<h3 className="uploadFolder">Folder To Upload Files To:
					<input type="text" name="name" />
				</h3>
				<button className="uploadFile">Upload</button>
				<div className="uploadBox">
					<div className="uploadedFilesList">
					<ul>
						<li>
						<span className="remove">&#10006;</span>
						POA-File1.pdf
						<span className="status">Completed</span>
						</li>
						<li><span className="remove">&#10006;</span>POA-File2.pdf<span className="status">Completed</span></li>
					</ul>
					</div>
					<div className="browseFilesButton">
						<input type="file" name="file" onChange={changeHandler} />
					</div>
				</div>
				<div className="wrapper">
					<button className="submitForm" onClick={handleSubmission}>Submit</button>
				</div>
			</form>
		</div>
	)
}

export default FileUploader;