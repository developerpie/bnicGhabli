<?php

use Illuminate\Support\Facades\Facade;
use Illuminate\Support\ServiceProvider;

return [


    'public_key' => env('PUBLIC_KEY'),
    'private_key' => env('PRIVATE_KEY'),
    'private_rpc' => env('PRIVATE_RPC'),
    'nft_contract_address' => env('VITE_NFT_CONTRACT_ADDRESS'),

    'name' => env('APP_NAME', 'Laravel'),

    'env' => env('APP_ENV', 'production'),

    'debug' => (bool) env('APP_DEBUG', false),

    'url' => env('APP_URL', 'http://localhost'),

    'asset_url' => env('ASSET_URL'),

    'timezone' => 'UTC',

    'locale' => 'en',

    'fallback_locale' => 'en',


    'faker_locale' => 'en_US',



    'key' => env('APP_KEY'),

    'cipher' => 'AES-256-CBC',


    'maintenance' => [
        'driver' => 'file',
        // 'store'  => 'redis',
    ],


    'mail_host' => env('MAIL_HOST'),
    'mail_smtpauth' => env('MAIL_SMTPAUTH'),
    'mail_username' => env('MAIL_USERNAME'),
    'mail_password' => env('MAIL_PASSWORD'),
    'mail_smtpsecure' => env('MAIL_SMTPSECURE'),
    'mail_smtpautotls' => env('MAIL_SMTPAUTOTLS'),
    'mail_port' => env('MAIL_PORT'),



    'providers' => ServiceProvider::defaultProviders()->merge([
        App\Providers\AppServiceProvider::class,
        App\Providers\AuthServiceProvider::class,
        // App\Providers\BroadcastServiceProvider::class,
        App\Providers\EventServiceProvider::class,
        App\Providers\RouteServiceProvider::class,
    ])->toArray(),



    'aliases' => Facade::defaultAliases()->merge([])->toArray(),

];
