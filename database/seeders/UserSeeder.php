<?php

namespace Database\Seeders;

use App\Models\User;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run()
    {


        $usersData = [
            [
                // seed is => album planet high garage frog zone reveal balcony south boil student extend
                'id' => 1,
                'first_name' => 'Danial',
                'last_name' => 'Zadrafiee',
                'full_name' => 'Danial Zadrafiee',
                'email' => 'subdanial@gmail.com',
                // 'wallet' => '0x7462f8AB7b751B4fAD64773f6Cb26492096A13ac',
                'wallet' => '0x2B9581bfB6f74aC115727DF3238Ca35477E4D687',
                'code' => 314012,
                'country_code' => 'IR',
                'state_code' => '23',
                'birthday_year' => 1998,
                'birthday_month' => 3,
                'birthday_day' => 10,
                'gender' => 'female',
                'education' => json_encode([['country' => 'CA', 'university' => 'Canada University', 'field' => 'Engineering', 'degree' => 'B.Eng.']]),
                'profession' => json_encode(['Civil Engineer', 'Project Manager']),
                'skill' => json_encode(['AutoCAD', 'Project Management']),
                'language' => json_encode(['English', 'French']),
                'cv' => "With over 10 years of industry experience, Danial Zad Rafiee excels as a Senior Web Developer ",

            ],
            [
                'id' => 2,
                'first_name' => 'Milad',
                'last_name' => 'Salimmehr',
                'full_name' => 'Milad Salimmehr',
                'email' => "miladsalimmehr@yahoo.co.uk",
                'wallet' => '0xC5D4B195AC47afAFCC6C171306f50087cC611039',
                'code' => 789012,
                'country_code' => 'IR',
                'state_code' => '23',
                'birthday_year' => 1995,
                'birthday_month' => 3,
                'birthday_day' => 10,
                'gender' => 'male',
                'education' => json_encode([['country' => 'IR', 'university' => 'Sanati Sharif', 'field' => 'Civil', 'degree' => 'Licence']]),
                'profession' => json_encode(['Civil Engineer', 'Entrepreneur']),
                'skill' => json_encode(['Project Management', 'Sells']),
                'language' => json_encode(['Persian', 'English']),
                "cv" => "As the CEO of Bnic and a renowned technology entrepreneur, Milad Salim Mehr has successfully pioneered numerous blockchain solutions that have revolutionized the digital identity verification space. With a strategic investment portfolio in blockchain technology, he's a visionary who effectively bridges the gap between innovation and market needs. Milad's astute leadership and future-forward thinking continue to drive advancements in the global tech industry.",
            ],

            [
                'id' => 3,
                'first_name' => 'Maryam',
                'last_name' => 'Bagheri',
                'full_name' => 'Maryam Bagheri',
                "email" => "maryambagherimb@yahoo.com",
                'wallet' => '0xE2a4653D6DEb031a96DfE2fF748eDe13AB9768Ac',
                'code' => 567890,
                'country_code' => 'IR',
                'state_code' => '23',
                'birthday_year' => 1998,
                'birthday_month' => 8,
                'birthday_day' => 12,
                'gender' => 'female',
                'education' => json_encode([['country' => 'IR', 'university' => 'Sanati Sharif', 'field' => 'Law', 'degree' => 'Bachelor']]),
                'profession' => json_encode(['Toy production']),
                'skill' => json_encode(['Accountants']),
                'language' => json_encode(['Persian', 'English', 'Azerbaijani']),
                'cv' => 'CEO Funnybox',
            ],

            [
                'id' => 4,
                'first_name' => 'Elahe',
                'last_name' => 'Bagheri',
                'full_name' => 'Elahe Bagheri',
                'email' => 'belahe987@gmail.cam',
                'wallet' => '0x9Ad7BFA93f446F849968457D8D5a3C65b9180110',
                'code' => 234567,
                'country_code' => 'IR',
                'state_code' => '23',
                'birthday_year' => 1992,
                'birthday_month' => 9,
                'birthday_day' => 5,
                'gender' => 'female',
                'education' => json_encode([['country' => 'AU', 'university' => 'Sydney University', 'field' => 'Psychology', 'degree' => 'Bachelor']]),
                'profession' => json_encode(['Psychologist']),
                'skill' => json_encode(['Cunselor', 'Beautician']),
                'language' => json_encode(['English', 'Perisan', 'Azerbaijani']),
                "cv" => "I'm Beautician and Psychologist",
            ],

            [
                'id' => 5,
                'first_name' => 'Abbas',
                'last_name' => 'Babaee',
                'full_name' => 'Abbas Babaee',
                'email' => 'ab.babaee@gmail.com',
                'wallet' => '0xbDEF82962ca909856c00c2c75012214876298620',
                'code' => 345678,
                'country_code' => 'IR',
                'state_code' => '23',
                'birthday_year' => 1984,
                'birthday_month' => 1,
                'birthday_day' => 15,
                'gender' => 'male',
                'education' => json_encode([['country' => 'CA', 'university' => 'British Columbia University', 'field' => 'Electrical Engineering', 'degree' => 'Ph.D.']]),
                'profession' => json_encode(['Engineer']),
                'skill' => json_encode(['Power system']),
                'language' => json_encode(['Power system']),
                'cv' => 'I\'m Abbas Babaee Electrical Engineer.',
            ],

            [
                'id' => 6,
                'first_name' => 'Golneshan',
                'last_name' => 'Mahmoodi',
                'full_name' => 'Golneshan Mahmoodi',
                'email' => 'gholneshanmahmoodi@gmail.com',
                'wallet' => '0x1E7D4ae68Da328942E3690306E442c868a93b8dD',
                'code' => 345678,
                'country_code' => 'IR',
                'state_code' => '23',
                'birthday_year' => 1984,
                'birthday_month' => 1,
                'birthday_day' => 15,
                'gender' => 'female',
                'education' => json_encode([['country' => 'CA', 'university' => 'British Columbia University', 'field' => 'Electrical Engineering', 'degree' => 'Ph.D.']]),
                'profession' => json_encode(['Toy Production']),
                'skill' => json_encode(['Accountants']),
                'language' => json_encode(['English', 'Perisan', 'Azerbaijani']),
                'cv' => 'I\'m Golneshan Mahmoodi',
            ],

        ];

        foreach ($usersData as $userData) {
            User::create($userData);
        }
    }
}
