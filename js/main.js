$(document).ready(function() {

	ordens_db.forEach(function(orden) {
		var $orden = $('<div/>', {'class': 'orden', 'orden-id': orden._orden_id, 'style':'background: url(' + orden.img + ')'});
		var $orden_title = $('<div/>', {'class': 'orden_title', 'text': orden.title});
		$('.carousel.ordens').append($orden.append($orden_title));
	});

	persons_db.list.forEach(function(person) {
		var $person = $('<div/>', {'class': 'person', 'person-id': person._person_id, 'style':'background: url(' + person.img + ')'});
		var $person_name = $('<div/>', {'class': 'person_name'});
		var $name_inner = $('<div/>', {'class': 'name_inner'});
		var $inner_text = $('<div/>', {'class': 'inner_text'})
		$('.carousel.persons').append($person.append($person_name.append($name_inner.append($inner_text.append(person.name)))));
	});

	$(document).on('mouseup', function(event) {
		if (!/orden|next|prev/.test(event.target.className)) {
			$('.person').children('.orden').remove().end().children('.person_name').hide().end().removeClass('active no_active');
			$('.compare_block').hide().children('.compare_results').removeClass('sucess reject');
			$('.meta').removeClass('compare desc');
			$('.block_persons').children('.navigate_block').show();
		}
	});

	$(window).on('load', function() {

		$('.person').on('click', function() {
			$('.person').addClass('no_active');
			$(this).addClass('active');

			var person_id = $(this).attr('person-id');
			var person = persons_db.list.filter(function(person) {
				return person._person_id == person_id;
			})[0];

			$('.compare_block').show();
			$('.flag').hide().filter('.desc').show();
			$('.meta').addClass('desc').children().empty()
				.filter('.name').append(person.name).end()
				.filter('.years').append(person.years).end()
				.filter('.text').append(person.desc);
		});

		$('.orden').draggable({
			scroll: false,
			appendTo: 'body',
			revert: 'invalid',
			helper: 'clone',
			start: function(event, ui) {
				$(ui.helper).children('.orden_title').remove();
				$('.block_persons').children('.navigate_block').hide();
				$('.person').children('.orden').remove().end().removeClass('active no_active');
				$('.compare_block').hide().children('.compare_results').removeClass('sucess reject');
				$('.meta').removeClass('compare desc');
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
					flag = 'reject';
					flag_text = person_orden.reject;
				} else {
					alert('Error:', '_orden_id: ' + orden_id, '_person_id: ' + person_id);
				}

				$('.person_name').hide();
				$('.compare_block').show().children('.compare_results').addClass(flag);
				$('.flag').hide().filter('.' + flag).show();
				$('.meta').addClass('compare').children().empty()
					.filter('.name').append(person.name).end()
					.filter('.years').append(person.years).end()
					.filter('.text').append(flag_text);

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