$(".counter-timer").each(function() {
  var number = $(this).attr("data-to");
  $(this).countTo({
    from: 0,
    to: number,
    speed: 4500,
    refreshInterval: 10,
    formatter: function(number, options) {
      number = number.toFixed(options.decimals);
      number = number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return number;
    }
  });
});