<script type="text/javascript">
  var link = document.querySelector(".feedback-link");
  var popup = document.querySelector(".feedback-modal");
  var close = document.querySelector(".modal-close");

  link.addEventListener("click", function (evt){
    evt.preventDefault();
    popup.classList.add("modal-show");
    }
  );

  close.addEventListener("click", function (evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
    }
  );
</script>
