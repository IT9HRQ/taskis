<?php 

include 'theme/header.php' ?>

<div class="uk-container uk-container-center uk-margin-top">        
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
            
            <div class="uk-button-group uk-float-right">
                <!--button class="uk-button uk-button-small">
                    <i class="uk-icon-remove"></i>
                </button-->                
                <button class="uk-button uk-button-small">
                    <i class="uk-icon-pencil"></i>                    
                </button>
                <button class="uk-button uk-button-small hook-project-delete">
                    <i class="uk-icon-remove"></i>
                </button>
            </div>
            
            <h3 class="uk-panel-title">
                {Titolo}
            </h3>
            <div class="items">
                
            </div>
        </div>
    </div>
    <div class="widget-plus uk-width-medium-1-10">
        <div class="uk-panel uk-panel-hover uk-panel-box uk-panel-box-secondary uk-margin-bottom hook-tasklist-create">
            <i class="uk-icon-plus uk-icon-large uk-vertical-align-middle"></i>
        </div>
    </div>
    <div class="widget-item">
        <input type="checkbox" class="checkbox">
        <div class="title">
        </div>    
    </div>    
</div>

<?php include 'theme/footer.php' ?>

<span style="display:none;">:-j</span>