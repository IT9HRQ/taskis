<?php 

include 'theme/header.php' ?>

<div class="uk-container uk-container-center mainpage">        
    <div id="widgets" class="uk-grid uk-grid-small">
        
                
    </div>
</div>
   
<div id="signin" class="uk-modal">
    <div class="uk-modal-dialog">    
        <span>Authorize access to Google Tasks API</span>
        
        <button id="authorize-button" onclick="handleAuthClick(event)">
          Authorize
        </button>
    </div>
</div>

<div id="backbones" style="display:none;">
    <div class="widget uk-width-medium-1-2">
        <div class="uk-panel uk-panel-hover uk-panel-box uk-panel-box-secondary uk-margin-bottom">
            
            <div class="buttons uk-float-right">
                <div class="uk-button-group">                
                    <button class="uk-button uk-button-small hook-project-modify">
                        <i class="uk-icon-pencil"></i>                    
                    </button>
                    <button class="uk-button uk-button-small hook-project-delete">
                        <i class="uk-icon-remove"></i>
                    </button>
                </div>
            </div>
                
            <h3 class="uk-panel-title">
                {Titolo}
            </h3>
            <div class="items">
                
            </div>
        </div>
    </div>
    
    <div class="widget-plus uk-width-medium-1-10">
        <div class="uk-panel uk-panel-hover uk-panel-box uk-panel-box-secondary uk-margin-bottom hook-project-create">
            <i class="uk-icon-plus uk-icon-large uk-vertical-align-middle"></i>
        </div>
    </div>
    
    <div class="widget-item">
        <input type="checkbox" class="checkbox">
        <div class="title">
        </div>    
    </div>

    <div class="items-editor">
        <textarea class="edit"></textarea>
    </div>
    
    <div class="buttons-editor">                
        <button class="uk-button uk-button-small hook-project-modify-update">
            <i class="uk-icon-check"></i> Save                    
        </button>
        <button class="uk-button uk-button-small hook-project-modify-cancel">
            Cancel
        </button>
    </div>

</div>

<?php include 'theme/footer.php' ?>

<span style="display:none;">:-j</span>