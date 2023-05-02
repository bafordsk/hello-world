<?php
	require_once '_inc/config.php';
	if ( isset($_GET['form']) ) $type = $_GET['form'];

?>
    <div class="row">
        <?php if ( empty($type) ): ?>
            <form id="add-form" class="col-sm-6" action="_inc/add-item.php" method="post">
                <p class="form-group">
                    <textarea class="form-control" name="message" id="text" rows="3" placeholder="is there something to do?"></textarea>
                </p>
                <p class="form-group submit-button">
                    <input class="btn-sm btn-danger" type="submit" value="add new item">
                </p>
            </form>
        <?php endif; ?>

        <?php if ( isset($type) ): ?>
            <?php
                if ( ! $item = get_item() ) {
                    show_404();
                }
            ?>

            <form id="<?= $type ?>-form" class="col-sm-6" action="_inc/<?= $type ?>-item.php" method="post">
                <p class="form-group">
                    <textarea <?php if ($type == 'delete') echo 'disabled' ?> class="form-control" name="message" id="text" rows="1"><?= $item ?></textarea>
                </p>
                <p class="form-group">
                    <input name="id" type="hidden" value="<?= $_GET['id'] ?>">
                    <input class="btn-sm btn-danger" type="submit" value="<?= $type ?> item">
                    <span class="controls">
		    	        <a href="<?= $base_url ?>" class="back-link text-muted">back</a>
		            </span>
                </p>
            </form>
        <?php endif; ?>
    </div>
