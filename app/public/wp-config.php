<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '5lpnaNvE/seHqGGnaOG1pW86PZn3+Chu/RAeT9fT7PPYvSVigqO7AXcXV2vhEc4RJHWCdHRXtEY7grSBpp6e4g==');
define('SECURE_AUTH_KEY',  'H3pBoLCD0zm5T/nmx1IQMqYn8AsKsSTUYXI6SYStu/ai+Pz4svwd7B5z8ivhWZQ4czxOv5nDktwFQkebwu4kYg==');
define('LOGGED_IN_KEY',    'sA9ovtFO3dSOGWJD93trEVfLnIAXRZ9zNbo8nAwFp+5IY1UI5zyoTgCFgPIKVVyArcusoyY2KOK90sWzpE/nPg==');
define('NONCE_KEY',        'Hri8LqqH5xalSWKcsX9g8psTeZewHB1f2q/SrTda6wnPIfVvWbCupKDYr0d7b51gThIyLoC7uqKbik6nWF+S1Q==');
define('AUTH_SALT',        'le5MC3ijJ4gz2Ce/VclXWDeq125zl1JxzHJxvZH3xqSbFmLCp3aSjhzZd1dmn6v95+4EVqjlkwUVcaEMzt1vSA==');
define('SECURE_AUTH_SALT', 'ts2ktReX3lVpIansO8fiSVHNp2LSSdtWg2on0oop7dL37zv+wAHWQZLKXikTHOXqhUC4e7rTraoI2JGbwrWeEA==');
define('LOGGED_IN_SALT',   'GEwhbbSeK2d6CXvTOIqLLC2sIPQqy2nWDU+qmMLDY9UldatJ82RbNqDiI3dpVUqCQ3luo9ZJ7TccvyWvpFFwRw==');
define('NONCE_SALT',       'OXgHr2+HUwuceRDtHBXqzou0C37lib4yv8MIJ21Bqo3iNvwfZsRTs36axm+oAO/RY9lzVhX4xjtMIIGzW0R77g==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';





/* Inserted by Local by Flywheel. See: http://codex.wordpress.org/Administration_Over_SSL#Using_a_Reverse_Proxy */
if ( isset( $_SERVER['HTTP_X_FORWARDED_PROTO'] ) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https' ) {
	$_SERVER['HTTPS'] = 'on';
}

/* Inserted by Local by Flywheel. Fixes $is_nginx global for rewrites. */
if ( ! empty( $_SERVER['SERVER_SOFTWARE'] ) && strpos( $_SERVER['SERVER_SOFTWARE'], 'Flywheel/' ) !== false ) {
	$_SERVER['SERVER_SOFTWARE'] = 'nginx/1.10.1';
}
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
