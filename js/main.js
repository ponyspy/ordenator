$(document).ready(function() {

	ordens_db.forEach(function(orden) {
		$('<div/>', {'class': 'orden', 'orden-id': orden._orden_id, 'style':'background: url(' + orden.img + ')'}).appendTo('.carousel.ordens');
	});

	persons_db.list.forEach(function(person) {
		var $person = $('<div/>', {'class': 'person', 'person-id': person._person_id, 'style':'background: url(' + person.img + ')'});
		var $person_name = $('<div/>', {'class': 'person_name'});
		var $name_inner = $('<div/>', {'class': 'name_inner'});
		var $inner_text = $('<div/>', {'class': 'inner_text', 'text': person.name})
		$('.carousel.persons').append($person.append($person_name.append($name_inner.append($inner_text))));
	});

	$(document).on('mouseup', function(event) {
		if (!/orden|next|prev/.test(event.target.className)) {
			$('.person').children('.orden').remove().end().children('.person_name').hide().end().removeClass('active no_active');
			$('.compare_block').hide().children('.compare_results').removeClass('sucess reject');
			$('.block_persons').children('.navigate_block').show();
		}
	});

	$(window).on('load', function() {
		$('.orden').draggable({
			scroll: false,
			appendTo: 'body',
			revert: 'invalid',
			helper: 'clone',
			start: function() {
				$('.block_persons').children('.navigate_block').hide();
				$('.person').children('.orden').remove().end().children('.person_name').hide().end().removeClass('active no_active');
				$('.compare_block').hide().children('.compare_results').removeClass('sucess reject');
				$('.block_persons').children('.navigate_block').show();
			}
		});

		$('.person').droppable({
			hoverClass: 'hover',
			activeClass: 'activate',
			tolerance: 'fit',
			over: function() {
				$(this).children('.person_name').show();
			},
			out: function() {
				$(this).children('.person_name').hide();
			},
			drop: function(event, ui) {
				var person_id = $(this).attr('person-id');
				var orden_id = $(ui.helper).attr('orden-id');
				var flag;
				var flag_text;

				var person = persons_db.list.filter(function(person) {
					return person._person_id == person_id;
				})[0];

				var person_orden = person.ordens.filter(function(orden) {
					return orden._orden_id == orden_id;
				})[0];

				if (!person_orden) {
					flag = 'reject';
					flag_text = persons_db.defaults.reject;
				} else if (person_orden.sucess) {
					flag = 'sucess';
					flag_text = person_orden.sucess;
				} else if (person_orden.reject) {
					flag = 'sucess';
					flag_text = person_orden.reject;
				} else {
					alert('Error:', '_orden_id: ' + orden_id, '_person_id: ' + person_id);
				}


				$('.compare_block').show().children('.compare_results').addClass(flag);
				$('.flag').hide().filter('.' + flag).show();
				$('.flag_text').text(flag_text);

				$('.person').addClass('no_active');
				$('.block_persons').children('.navigate_block').hide();

				$(this).addClass('active').append($(ui.helper).clone().css({top:'auto', left: 'auto'}));
			}
		});
	});


	$('.ordens').cycle({
			// speed: 600,
			// manualSpeed: 600,
			fx: 'carousel',
			timeout: 2000,
			autoHeight: false,
			slides: '.orden',
			paused: true,
			manualTrump: false,
			log: false
	});

	$('.persons').cycle({
			// speed: 600,
			// manualSpeed: 600,
			fx: 'carousel',
			timeout: 2000,
			autoHeight: false,
			slides: '.person',
			paused: true,
			manualTrump: false,
			log: false
	});


	$('.prev').on('click', function() {
		var type = $(this).parent('.navigate_block').next('.carousel').attr('class').split(' ')[1];
		$('.' + type).cycle('prev');
	});

	$('.next').on('click', function() {
		var type = $(this).parent('.navigate_block').next('.carousel').attr('class').split(' ')[1];
		$('.' + type).cycle('next');
	});

});