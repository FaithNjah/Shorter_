const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const shortUrl = require('shortid');
const Url = require('../Models/url'); 


router.post('/', async (req, res) => {
    const originalUrl = req.body.url;

    if(!originalUrl){
        return res.status(400).json({error: 'enter a valid url'});
    }
    if(!originalUrl.startsWith('http')){
        return res.status(400).json({error: 'enter a valid url'});
    }

    const shortcode = shortUrl.generate();
    
    try {
        const newUrl = new Url({
            originalUrl: originalUrl,
            shortCode: shortcode
        });
        
        await newUrl.save();
        
        res.json({
            originalUrl : originalUrl,
            shortcode: shortcode,
            shortUrl: `http://localhost:3000/${shortcode}`
        });
        
    } catch (error) {
        res.status(500).json({error: 'Could not save URL'});
    }
});

router.get('/:shortCode', async (req, res) => {
    try {
        const shortCode = req.params.shortCode;
        
        // Find the original URL in database
        const urlData = await Url.findOne({ shortCode: shortCode });
        
        if (urlData) {
            // This is the magic! Redirect to original URL
            res.redirect(urlData.originalUrl);
        } else {
            res.status(404).json({ error: 'Short URL not found' });
        }
        
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});

module.exports = router;