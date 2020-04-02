import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Spiner() {
  return <Loader type="ThreeDots" color="#3f51b5" height={60} width={60} />;
}
