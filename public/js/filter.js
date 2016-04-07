/*var filter_btm_active = function() {
  $(current_li.children).removeClass("active");
  $(this.children).addClass("active");
  current_li = this;
  if(current_li == filters_btm.children[0]){
    for (var index =0; index <filters_info.children.length; index ++){
      $(filters_info.children[index]).addClass("active");
    }
  }
  else{
    for (var index =0; index <filters_info.children.length; index ++){
      if(filters_info.children[index].getAttribute('data-cat') == current_li.children[0].getAttribute('data-filter')){
        $(filters_info.children[index]).addClass("active");
      }
      else {
        $(filters_info.children[index]).removeClass("active");
        console.log(filters_info.children[index].display);
      }
    }
  }
}

var filters_btm = document.getElementById("filters");
var current_li;

for(var index = 0; index < filters_btm.children.length; index++){
  filters_btm.children[index].onclick = filter_btm_active;
}
current_li = filters_btm.children[0];

var filters_info = document.getElementById("sortable");

for (var index =0; index <filters_info.children.length; index ++){
  $(filters_info.children[index]).addClass("active");
}
*/
