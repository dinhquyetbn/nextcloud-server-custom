<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitFederation
{
    public static $prefixLengthsPsr4 = array (
        'O' => 
        array (
            'OCA\\Federation\\' => 15,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'OCA\\Federation\\' => 
        array (
            0 => __DIR__ . '/..' . '/../lib',
        ),
    );

    public static $classMap = array (
        'OCA\\Federation\\AppInfo\\Application' => __DIR__ . '/..' . '/../lib/AppInfo/Application.php',
        'OCA\\Federation\\BackgroundJob\\GetSharedSecret' => __DIR__ . '/..' . '/../lib/BackgroundJob/GetSharedSecret.php',
        'OCA\\Federation\\BackgroundJob\\RequestSharedSecret' => __DIR__ . '/..' . '/../lib/BackgroundJob/RequestSharedSecret.php',
        'OCA\\Federation\\Command\\SyncFederationAddressBooks' => __DIR__ . '/..' . '/../lib/Command/SyncFederationAddressBooks.php',
        'OCA\\Federation\\Controller\\OCSAuthAPIController' => __DIR__ . '/..' . '/../lib/Controller/OCSAuthAPIController.php',
        'OCA\\Federation\\Controller\\SettingsController' => __DIR__ . '/..' . '/../lib/Controller/SettingsController.php',
        'OCA\\Federation\\DAV\\FedAuth' => __DIR__ . '/..' . '/../lib/DAV/FedAuth.php',
        'OCA\\Federation\\DbHandler' => __DIR__ . '/..' . '/../lib/DbHandler.php',
        'OCA\\Federation\\Hooks' => __DIR__ . '/..' . '/../lib/Hooks.php',
        'OCA\\Federation\\Listener\\SabrePluginAuthInitListener' => __DIR__ . '/..' . '/../lib/Listener/SabrePluginAuthInitListener.php',
        'OCA\\Federation\\Middleware\\AddServerMiddleware' => __DIR__ . '/..' . '/../lib/Middleware/AddServerMiddleware.php',
        'OCA\\Federation\\Migration\\Version1010Date20200630191302' => __DIR__ . '/..' . '/../lib/Migration/Version1010Date20200630191302.php',
        'OCA\\Federation\\Settings\\Admin' => __DIR__ . '/..' . '/../lib/Settings/Admin.php',
        'OCA\\Federation\\SyncFederationAddressBooks' => __DIR__ . '/..' . '/../lib/SyncFederationAddressBooks.php',
        'OCA\\Federation\\SyncJob' => __DIR__ . '/..' . '/../lib/SyncJob.php',
        'OCA\\Federation\\TrustedServers' => __DIR__ . '/..' . '/../lib/TrustedServers.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitFederation::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitFederation::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitFederation::$classMap;

        }, null, ClassLoader::class);
    }
}
