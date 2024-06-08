<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DaoAndDaoMembersSeeder extends Seeder
{
    public function run()
    {
        $describe = "BNIC is a platform for registering the identity of real and legal persons on the Polygon blockchain. This platform also offers the ability for individuals to create their own forms in the format of certificates and licenses, allowing different people to apply for these licenses. All information is transparently recorded on the blockchain and visible, and users also have the option to record information in an encrypted form.";

        for ($i = 1; $i <= 6; $i++) {
            DB::table('daos')->insert([
                'id' => $i,
                'name' => 'Bnic.io' . $i,
                'token' => null,
                'symbol' => 'BNIC' . $i,
                'describe' => $describe,
                'features' => '["Contracts"]',
                'wallpaper' => 'https://images.unsplash.com/photo-1687132682733-0a1ddd48a2bf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'created_at' => '2023-10-19 10:46:41',
                'updated_at' => '2023-10-19 10:46:41'
            ]);

            $users = [
                [
                    "id" => $i * 4 - 3,
                    "user_id" => 1,
                    "dao_id" => $i,
                    "role" => "Founder",
                    'email' => 'subdanial@gmail.com',
                    "share" => 30,
                    "created_at" => "2023-10-19 10:46:41",
                    "updated_at" => "2023-10-19 10:46:41"
                ],
                [
                    "id" => $i * 4 - 2,
                    "user_id" => 2,
                    "dao_id" => $i,
                    "role" => "Co-Founder",
                    'email' => "miladsalimmehr@yahoo.co.uk",
                    "share" => 30,
                    "created_at" => "2023-10-19 10:46:41",
                    "updated_at" => "2023-10-19 10:46:41"
                ],
                [
                    "id" => $i * 4 - 1,
                    "user_id" => 3,
                    "dao_id" => $i,
                    "role" => "Shareholder",
                    "email" => "maryambagherimb@yahoo.com",
                    "share" => 30,
                    "created_at" => "2023-10-19 10:46:41",
                    "updated_at" => "2023-10-19 10:46:41"
                ],
                [
                    "id" => $i * 4,
                    "user_id" => 5,
                    "dao_id" => $i,
                    "role" => "Shareholder",
                    "email" => "ab.babaee@gmail.com",
                    "share" => 10,
                    "created_at" => "2023-10-19 10:46:41",
                    "updated_at" => "2023-10-19 10:46:41"
                ],
            ];

            DB::table('dao_user')->insert($users);
        }
    }
}
