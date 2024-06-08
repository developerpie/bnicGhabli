<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileUploadController extends Controller
{
    public function upload(Request $request)
    {
        // Decode the JSON data
        $data = json_decode($request->getContent(), true);

        // Save the data to a temporary file
        $tempFile = tempnam(sys_get_temp_dir(), 'upload') . '.json';
        file_put_contents($tempFile, json_encode($data));

        // FTP configuration (move this to your .env file for security)
        $ftpConfig = [
            'host' => 'billy.iran.liara.ir',
            'username' => 'subdanial',
            'password' => 'a073c30b-b850-48e0-a4be-1fce2ba1d810',
            'port' => 2112,
        ];

        // Upload the file using Laravel's filesystem
        Storage::disk('ftp')->put('file.json', fopen($tempFile, 'r+'));

        // Clean up the temporary file
        unlink($tempFile);

        return response()->json(['message' => 'File uploaded successfully']);
    }
}
