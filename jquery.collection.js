/*
 *  Project: jQuery Collection Plugin
 *  Description:
 *  Author: Andrzej Ośmiałowski <me@osmialowski.co.uk>
 *  License: MIT
 */

!function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    factory(jQuery);
  }
}(function ($, window, document, undefined) {
  'use strict';

  var pluginName = 'collection',
    defaults = {
      selector: '> div',
      wrapper: false,
      prototypeName: '__name__',
      prototypeAttr: 'prototype',
      btnAddClass: 'button_add',
      btnAddText: '[+]',
      btnDeleteClass: 'button_delete',
      btnDeleteText: '[-]',
      allowAdd: true,
      allowDelete: true,
      onAdded: function () {},
      onDeleted: function () {},
      min: 1,
      max: 100
    };

  function Collection(element, options) {
    this.element = element;
    this.$element = $(element);
    this.options = $.extend( {}, defaults, options) ;

    this.prototype = this.$element.data(this.options.prototypeAttr);
    this.index = this.$element.find(this.options.selector).length;

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  Collection.prototype = {
    init: function () {
      this._registerEventHandlers();

      this.$element.trigger(pluginName + '.initialized');
    },

    add: function () {
      var $btn = $('<a />').addClass(this.options.btnAddClass).text(this.options.btnAddText).attr('href', '#');

      if (this.options.allowAdd === true && this.index < this.options.max) {
        this.$element.find('.' + this.options.btnAddClass).remove();
        this.$element.append($btn);
      } else {
        this.$element.find('.' + this.options.btnAddClass).remove();
      }

      $btn.on('click', $.proxy(function (event) {
        var pattern = new RegExp(this.options.prototypeName, 'g'),
          prototype = this.$element.data(this.options.prototypeAttr).replace(pattern, this.index);

        if (this.options.wrapper !== false) {
          prototype = '<' + this.options.wrapper + '>' + prototype + '</' + this.options.wrapper + '>';
        }

        this.$element.append(prototype);

        this.options.onAdded.call(this, this.$element, $(prototype));

        event.preventDefault();

        this.$element.trigger(pluginName + '.changed');
      }, this));
    },

    delete: function ($element) {
      var $btn = $('<a />').addClass(this.options.btnDeleteClass).text(this.options.btnDeleteText).attr('href', '#');

      if (this.options.allowDelete === true && this.index > this.options.min) {
        $element.find('.' + this.options.btnDeleteClass).remove();
        $element.append($btn);
      } else if (this.index === this.options.min) {
        $element.find('.' + this.options.btnDeleteClass).remove();
      }

      $btn.on('click', $.proxy(function (event) {
        this.options.onDeleted.call(this, this.$element, $element);

        $element.remove();

        event.preventDefault();

        this.$element.trigger(pluginName + '.changed');
      }, this));
    },

    prepareHTML: function () {
      this.add();

      var $this = this;
      this.$element.find(this.options.selector).each(function() {
        $this.delete.apply($this, [$(this)]);
      });
    },

    _registerEventHandlers: function () {
      this.$element.on(pluginName + '.initialized', $.proxy(this.onCollectionInitialized, this));
      this.$element.on(pluginName + '.changed', $.proxy(this.onCollectionChanged, this));
    },

    onCollectionInitialized: function () {
      this.prepareHTML();
    },

    onCollectionChanged: function () {
      this.index = this.$element.find(this.options.selector).length;

      this.prepareHTML();
    }
  };

  $.fn[pluginName] = function ( options ) {
    var args = arguments;

    if (options === undefined || typeof options === 'object') {
      return this.each(function () {
        if (!$.data(this, 'plugin_' + pluginName)) {
          $.data(this, 'plugin_' + pluginName, new Collection( this, options ));
        }
      });
    } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
      var returns;

      this.each(function () {
        var instance = $.data(this, 'plugin_' + pluginName);

        if (instance instanceof Plugin && typeof instance[options] === 'function') {
          returns = instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
        }

        if (options === 'destroy') {
          $.data(this, 'plugin_' + pluginName, null);
        }
      });

      return returns !== undefined ? returns : this;
    }
  };
});