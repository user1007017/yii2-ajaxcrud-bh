<?php
namespace user1007017\ajaxcrud;

use yii\base\Widget;
use yii\helpers\Html;

class BulkButtonDropdownWidget extends Widget{

	public $buttons;
	
	public function init(){
		parent::init();
		
	}
	
	public function run(){
		$content = '<div class="pull-left">'.
                   $this->buttons.
                   '</div>';
		return $content;
	}
}
?>
