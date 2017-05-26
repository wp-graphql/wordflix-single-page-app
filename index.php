<?php
/**
 * This is the bare minimum output. The "Create React App" assets will be enqueued and will be used
 * for all template rendering.
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?> >
<div id="root"></div>
<?php wp_footer(); ?>
</body>
</html>
