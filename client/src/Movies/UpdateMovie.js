import React, { useState, useEffect } from "react";
import axios from 'axios'

// "http://localhost:5000/api/movies"

const initialMovie = {
    name: '',
    price: '',
    imageUrl: '',
    description: '',
    shipping: ''
};

