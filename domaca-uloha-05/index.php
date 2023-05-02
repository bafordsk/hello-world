<?php
    include_once "_partials/header.php";
?>

    <div class="page-header">
        <h1>VERY MUCH TODO LIST</h1>
    </div>

    <?php $data = $database->select('items', [ 'id', 'text' ]); ?>

    <ul id="item-list" class="list-group col-sm-6">
        <?php
            if ($data) {
                foreach ( $data as $item ) {
                    echo '<li id="item-'. $item['id'] .'" class="list-group-item">';
                    echo    $item['text'];
                    echo '  <div class="controls pull-right">';
                    echo '      <a href="index.php?form=edit&id='. $item['id'] .'" class="edit-link">edit</a>';
                    echo '      <a href="index.php?form=delete&id='. $item['id'] .'" class="delete-link text-muted glyphicon glyphicon-remove"></a>';
                    echo '  </div>';
                    echo '</li>';
                }
            }
            else {
                echo '<li id="nothing" class="list-group-item"><strong>Please add items using the form on the right.</strong></li>';
            }
        ?>
    </ul>


<?php
    include         '_partials/form.php';
    include_once    "_partials/footer.php";
?>