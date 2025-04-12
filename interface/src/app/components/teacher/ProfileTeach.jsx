"use client"
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './ProfileTeach.css'; // External CSS for additional styling
import { api } from '@/config';

export default function ProfileTeach({ gotVideos }) {
  const [videos, setVideos] = useState(gotVideos || []);
  const [quizzes, setQuizzes] = useState([]);
  const [newVideoTitle, setNewVideoTitle] = useState('');
  const [newVideoDescription, setNewVideoDescription] = useState('');
  const [newQuizTitle, setNewQuizTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const [showVideoDialog, setShowVideoDialog] = useState(false);
  const [showQuizDialog, setShowQuizDialog] = useState(false);
  const [videoFile, setVideoFile] = useState(null);


  const addVideo = async () => {
    if (!videoFile) {
      console.error("No video file selected");
      return;
    }

    const formData = new FormData();
    formData.append('title', newVideoTitle);
    formData.append('description', newVideoDescription);
    formData.append('file', videoFile); // Key name should match your backend expectation

    try {
      const response = await fetch(`${api}/videos`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const savedVideo = await response.json();
        setVideos([...videos, savedVideo]);
        setNewVideoTitle('');
        setNewVideoDescription('');
        setVideoFile(null);
        setShowVideoDialog(false);
      } else {
        console.error('Failed to add video');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const deleteVideo = async (index) => {
    const videoToDelete = videos[index];
    try {
      const response = await fetch(`${api}/videos/${videoToDelete.id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setVideos(videos.filter((_, i) => i !== index));
      } else {
        console.error('Failed to delete video');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const addQuestion = () => {
    setQuestions([...questions, { text: '', responses: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }] }]);
  };

  const updateQuestionText = (index, text) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].text = text;
    setQuestions(updatedQuestions);
  };

  const updateResponse = (questionIndex, responseIndex, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].responses[responseIndex][field] = value;
    setQuestions(updatedQuestions);
  };

  const addQuiz = async () => {
    const quizData = { title: newQuizTitle, questions };
    try {
      const response = await fetch(`${api}/api/quizzes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quizData),
      });
      if (response.ok) {
        const savedQuiz = await response.json();
        setQuizzes([...quizzes, savedQuiz]);
        setNewQuizTitle('');
        setQuestions([]);
        setShowQuizDialog(false);
      } else {
        console.error('Failed to add quiz');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteQuiz = async (index) => {
    const quizToDelete = quizzes[index];
    try {
      const response = await fetch(`${api}/api/quizzes/${quizToDelete.id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setQuizzes(quizzes.filter((_, i) => i !== index));
      } else {
        console.error('Failed to delete quiz');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-5">
        <h1 className="text-3xl font-bold mb-5 text-red-600">Teacher Profile</h1>

        {/* Earnings Section */}
        <div className="mb-5">
          <h2 className="text-2xl font-semibold text-gray-800">Earnings</h2>
          <p className="text-lg text-green-600 font-bold">$5,000</p>
        </div>

        {/* Videos Section */}
        <div className="mb-5">
          <h2 className="text-2xl font-semibold text-gray-800">Videos</h2>
          <Button label="Add Video" icon="pi pi-plus" className="p-button-success mb-3" onClick={() => setShowVideoDialog(true)} />
          {videos && videos.map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{video.title}</h3>
              <video controls className="w-full rounded">
                <source
                  src={`https://res.cloudinary.com/your-cloud-name/video/upload/${video.publicId}.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <button
                onClick={() => deleteVideo(index)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Quizzes Section */}
        <div className="mb-5">
          <h2 className="text-2xl font-semibold text-gray-800">Quizzes</h2>
          <Button label="Add Quiz" icon="pi pi-plus" className="p-button-success mb-3" onClick={() => setShowQuizDialog(true)} />
          <DataTable value={quizzes} className="mb-3 shadow-md rounded-lg">
            <Column field="title" header="Title" className="text-gray-700"></Column>
            <Column
              body={(rowData, { rowIndex }) => (
                <Button icon="pi pi-trash" className="p-button-danger" onClick={() => deleteQuiz(rowIndex)} />
              )}
              header="Actions"
            ></Column>
          </DataTable>
        </div>

        {/* Live Session Button */}
        <div className="mb-5">
          <Button label="Start Live Session" icon="pi pi-video" className="p-button-warning w-full text-lg" />
        </div>
      </div>

      {/* Add Video Dialog */}
      <Dialog header="Add Video" visible={showVideoDialog} onHide={() => setShowVideoDialog(false)}>
        <div className="p-fluid">
          <InputText value={newVideoTitle} onChange={(e) => setNewVideoTitle(e.target.value)} placeholder="Video Title" />
          <InputText value={newVideoDescription} onChange={(e) => setNewVideoDescription(e.target.value)} placeholder="Video Description" className="mt-2" />
          <input
            type="file"
            accept="video/mp4"
            onChange={(e) => setVideoFile(e.target.files[0])}
            className="mt-2"
          />
          <Button label="Add" icon="pi pi-check" className="mt-3" onClick={addVideo} disabled={!videoFile} />
        </div>
      </Dialog>


      {/* Add Quiz Dialog */}
      <Dialog header="Add Quiz" visible={showQuizDialog} onHide={() => setShowQuizDialog(false)}>
        <div className="p-fluid">
          <InputText value={newQuizTitle} onChange={(e) => setNewQuizTitle(e.target.value)} placeholder="Quiz Title" className="mb-3" />
          {questions.map((question, questionIndex) => (
            <div key={questionIndex} className="mb-4">
              <InputText
                value={question.text}
                onChange={(e) => updateQuestionText(questionIndex, e.target.value)}
                placeholder={`Question ${questionIndex + 1}`}
                className="mb-2"
              />
              {question.responses.map((response, responseIndex) => (
                <div key={responseIndex} className="flex items-center mb-2">
                  <InputText
                    value={response.text}
                    onChange={(e) => updateResponse(questionIndex, responseIndex, 'text', e.target.value)}
                    placeholder={`Response ${responseIndex + 1}`}
                    className="mr-2"
                  />
                  <input
                    type="checkbox"
                    checked={response.isCorrect}
                    onChange={(e) => updateResponse(questionIndex, responseIndex, 'isCorrect', e.target.checked)}
                    className="mr-2"
                  />
                  <label>Correct</label>
                </div>
              ))}
            </div>
          ))}
          <Button label="Add Question" icon="pi pi-plus" className="p-button-secondary mb-3" onClick={addQuestion} />
          <Button label="Add Quiz" icon="pi pi-check" className="mt-3" onClick={addQuiz} />
        </div>
      </Dialog>
    </div>
  );
}
