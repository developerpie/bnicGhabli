<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class MailController extends Controller
{
    private $mail;

    public function __construct()
    {
        $this->mail = new PHPMailer(true);
        $this->setUpMail();
    }

    private function setUpMail()
    {
        $this->mail->isSMTP();
        $this->mail->Host        = config('app.mail_host');
        $this->mail->SMTPAuth    = config('app.mail_smtpauth');
        $this->mail->Username    = config('app.mail_username');
        $this->mail->Password    = config('app.mail_password');
        $this->mail->SMTPSecure  = config('app.mail_smtpsecure');
        $this->mail->SMTPAutoTLS = config('app.mail_smtpautotls');
        $this->mail->Port        = config('app.mail_port');
        $this->mail->setFrom(config('app.mail_username'), config('app.mail_username'));
    }

    public function sendMail(Request $request)
    {
        try {
            $this->mail->addAddress($request->reciver_email);
            $this->mail->isHTML(true);
            $this->mail->Subject = 'Invitation to Explore BNIC.io';
            $this->mail->Body    = $request->body;
            $this->mail->send();
            return response()->json(['log' => 'Mail sent to ' . $request->reciver_email]);
        } catch (Exception $e) {
            return response()->json(['error' => $this->mail->ErrorInfo], 500);
        }
    }
}
