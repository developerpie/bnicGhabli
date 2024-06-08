<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EscrowSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('escrows')->insert([
            'id' => 1,
            'dao_id' => '1',
            'title' => 'Car Contract',
            'balance' => 0.005,
            'describe' => 'Selfish battle depths suicide against sea disgust ideal hope. Justice will fearful pinnacle spirit salvation decieve will decrepit.
                           Self love ultimate salvation disgust. Spirit christian oneself christianity enlightenment of passion joy contradict madness insofar.
                           Oneself suicide value prejudice madness dead right endless morality law salvation moral salvation. Law good moral endless inexpedient sexuality grandeur zarathustra. Holiest transvaluation passion law suicide',
            'contract_wallet_id' =>  mt_rand(100000000000, 900000000000),
            'split' => 1,
            'status' => 0,
            'creator_email' => 'subdanial@gmail.com',
            'reciver_email' => 'subdanial@gmail.com',
            'created_at' => '2023-12-17 18:53:50',
            'updated_at' => '2023-12-17 19:17:37',
        ]);

        DB::table('escrow_user')->insert([
            [
                'id' => 1,
                'escrow_id' => 1,
                'user_id' => 1,
                'email' => 'subdanial@gmail.com',
                'role' => 'moderator',
                'fundshare' => null,
                'votepower' => 50,
                'signed' => 0,
                'created_at' => null,
                'updated_at' => null,
            ],
            [
                'id' => 2,
                'escrow_id' => 1,
                'user_id' => 3,
                'email' => 'maryambagherimb@yahoo.com',
                'role' => 'Signer',
                'fundshare' => null,
                'votepower' => 51,
                'signed' => 0,
                'created_at' => null,
                'updated_at' => null,
            ]
        ]);
    }
}
