import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import ReactDom from 'react-dom';
import { ReactComponent as TurnLeft } from '../../../../assets/svg/TurnLeft.svg';
import { ReactComponent as TurnRight } from '../../../../assets/svg/TurnRight.svg';



const AvatarCropper = ({ handleCloseModal, handleSetUserAvatar }) => {
  const fileRef = useRef();

  const [cropperOpen, setCropperOpen] = useState(false);
  const [img, setImg] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [croppedImg, setCroppedImg] = useState('');
  const [editor, setEditor] = useState(null);
  const [editorStatus, setEditorStatus] = useState(false);

  const handleZoomSlider = (event, value) => {
    setZoom(value);
  };

  const handleFileChange = (e) => {
    window.URL = window.URL || window.webkitURL;
    const url = window.URL.createObjectURL(e.target.files[0]);
    ReactDom.findDOMNode(fileRef.current).value = '';
    setImg(url);
    setCropperOpen(true);
    setEditorStatus(true);
  };

  const handleSave = (e) => {
    if (editor) {
      const canvasScaled = editor.getImageScaledToCanvas();
      const croppedImg = canvasScaled.toDataURL();

      setImg(img);
      setCropperOpen(false);
      setCroppedImg(croppedImg);
      setRotate(0);
      setEditorStatus(false);

      handleSetUserAvatar(croppedImg);
    }
  };

  const handleCancel = () => {
    setCropperOpen(false);
    setEditorStatus(false);
  };

  const rotateLeft = () => {
    setRotate(rotate - 90);
  };

  const rotateRight = () => {
    setRotate(rotate + 90);
  };

  const handleDeleteImage = () => {
    setCroppedImg('');
    setImg(null);

    handleSetUserAvatar('');
  };

  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative my-6 mx-4 w-96 md:w-3/5 lg:w-2/5 xl:w-1/4">
          {/* content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* body */}
            <div className="relative flex-auto">
              <MuiThemeProvider>
                <div style={{ height: editorStatus ? 600 : 282 }} className="flex flex-col h-screen items-center justify-center bg-grey-lighter">

                  {!editorStatus
                    && <>
                      <span className="text-sz-32 font-bold mt-2">Edit Photo</span>
                      <div className="w-10/12 relative overflow-hidden h-22 inline-block">
                        <button className="w-full bg-blue-600 py-2 px-3 border border-blue-600 shadow-sm leading-4 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-3xl text-sz-16 font-normal h-12 mt-4 ">Edit Photo</button>
                        <input ref={fileRef} type="file" name="myfile" accept="image/*"
                          onChange={handleFileChange} className="absolute left-10 top-6 opacity-0" />
                      </div>
                      <button className="w-10/12 bg-white py-2 px-3 border border-red-700 shadow-sm leading-4 font-medium text-red-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-3xl text-sz-14 font-normal h-12 mt-1.5" onClick={handleDeleteImage}>Delete Photo</button>
                      <button className="w-10/12 bg-white py-2 px-3 border border-gray-300 shadow-sm leading-4 font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-3xl text-sz-14 font-bold h-12 mt-1.5" onClick={handleCloseModal}>Cancel</button>
                    </>
                  }
                  {cropperOpen && (
                    <div
                      className="cropper-wrapper"
                      style={{
                        position: 'absolute',
                        top: 200,
                        width: '50%',
                        height: '30%',
                        background: 'rgba(200,200,200,.8)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '100px',
                      }}
                    >
                      <span className="text-sz-32 font-bold mt-2 mb-4">Edit Photo</span>
                      <AvatarEditor
                        ref={setEditor}
                        image={img}
                        width={300}
                        height={300}
                        border={5}
                        borderRadius={300}
                        color={[255, 255, 255, 0.6]} // RGBA
                        rotate={rotate}
                        scale={zoom}
                      />
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <button style={{ marginRight: 20, paddingTop: 20 }} onClick={rotateLeft}>
                          <TurnLeft />
                        </button>
                        <Slider
                          min={1}
                          max={10}
                          step={0.1}
                          value={zoom}
                          onChange={handleZoomSlider}
                          style={{ width: 200, marginBottom: 36, height: 10 }}
                        />
                        <button style={{ marginLeft: 20, paddingTop: 20 }} onClick={rotateRight}>
                          <TurnRight />
                        </button>
                      </div>
                      <div className="w-full" style={{ width: 312 }}>
                        <button className="w-full bg-blue-600 py-2 px-3 border border-blue-600 shadow-sm leading-4 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-3xl text-sz-16 font-normal h-12 mt-4 " onClick={handleSave}>Confirm</button>
                        <button className="w-full bg-white py-2 px-3 border border-gray-300 shadow-sm leading-4 font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-3xl text-sz-14 font-bold h-12 mt-1.5" onClick={handleCancel}>Cancel</button>
                      </div>
                    </div>
                  )}
                </div>
              </MuiThemeProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
export default AvatarCropper;
