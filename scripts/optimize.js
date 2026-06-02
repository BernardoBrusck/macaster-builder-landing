import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';

ffmpeg.setFfmpegPath(ffmpegStatic);

const publicDir = path.resolve('public');
const logosDir = path.join(publicDir, 'logos-parceiros');
const productsDir = path.join(publicDir, 'produtos');
const videoPath = path.join(publicDir, 'background-video.mp4');
const videoOutPath = path.join(publicDir, 'background-video-opt.mp4');

// Function to convert a directory of images to webp
async function convertToWebp(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        if (!file.match(/\.(png|jpe?g)$/i)) continue; // skip non-images and already webp
        const fullPath = path.join(dir, file);
        const nameWithoutExt = path.parse(file).name;
        // Fix accents in names like "Médeli"
        const cleanName = nameWithoutExt.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const outPath = path.join(dir, `${cleanName}.webp`);
        
        try {
            await sharp(fullPath).webp({ quality: 80 }).toFile(outPath);
            console.log(`Converted: ${file} -> ${cleanName}.webp`);
            // Optionally delete original
            fs.unlinkSync(fullPath);
        } catch (e) {
            console.error(`Failed to convert ${file}:`, e);
        }
    }
}

// Function to compress video
function compressVideo() {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(videoPath)) {
            console.log('Video not found.');
            return resolve();
        }
        console.log('Compressing video, this may take a minute...');
        ffmpeg(videoPath)
            .videoCodec('libx264')
            .size('1280x720')
            .outputOptions([
                '-crf 28',
                '-preset faster',
                '-movflags +faststart'
            ])
            .save(videoOutPath)
            .on('end', () => {
                console.log('Video compression finished.');
                // Delete original and rename compressed
                fs.unlinkSync(videoPath);
                fs.renameSync(videoOutPath, videoPath);
                resolve();
            })
            .on('error', (err) => {
                console.error('Video compression error:', err);
                reject(err);
            });
    });
}

async function run() {
    console.log('Starting image optimizations...');
    await convertToWebp(logosDir);
    await convertToWebp(productsDir);
    
    console.log('Starting video optimization...');
    await compressVideo();
    console.log('All optimizations done!');
}

run();
