#jQuery Collection Plugin
This is a simple plugin to work with Symfony2 form collections. For more information about setting up form collection in your application, please read [documentation](http://symfony.com/doc/current/cookbook/form/form_collections.html).

## Usage
The main goal for this plugin is the ease of use. The minimum usage example is: `$(".collection").collection();`. You can obviously configure some of the options, providing an object as an argument for the `collection()` function:
```js
$(document).ready(function () {
  $('#collection1').collection({
    selector: '> li',
    wrapper: 'li'
  });
});
```

## Installation
The plugin can be installed via [Bower](http://bower.io/) with the following command `bower install jquery.collection`. You can also [download](https://github.com/aosmialowski/jquery-collection/archive/master.zip) the whole archive and include Javascript file into your HTML document manually. The only dependency is jQuery (tested with version 1.10.x).

## Browser support
This plugin should work with the all modern browsers including: IE9+, Firefox, Chrome, Opera, Safari.

## Configuration Options
All configuration options available are listed in the below table.
<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Default value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>selector</code></th>
      <td><code>"> div"</code></td>
      <td><code>String</code> Collection items selector.</td>
    </tr>
    <tr>
      <th scope="row"><code>wrapper</code></th>
      <td><code>false</code></td>
      <td><code>String</code> An element to wrap collection items, ex. for an unordered list it would be <code>li</li>.</td>
    </tr>
    <tr>
      <th scope="row"><code>prototypeAttr</code></th>
      <td><code>"prototype"</code></td>
      <td><code>String</code> A prototype HTML5 data attribute name.</td>
    </tr>
    <tr>
      <th scope="row"><code>prototypeName</code></th>
      <td><code>"__name__"</code></td>
      <td><code>String</code> A *placeholder* to replace in HTML prototype.</td>
    </tr>
    <tr>
      <th scope="row"><code>btnAddClass</code></th>
      <td><code>"button_add"</code></td>
      <td><code>String</code> *ADD* button class name.</td>
    </tr>
    <tr>
      <th scope="row"><code>btnAddText</code></th>
      <td><code>"[+]"</code></td>
      <td><code>String</code> *ADD* button text.</td>
    </tr>
    <tr>
      <th scope="row"><code>btnDeleteClass</code></th>
      <td><code>"button_delete"</code></td>
      <td><code>String</code> *DELETE* button class name.</td>
    </tr>
    <tr>
      <th scope="row"><code>btnDeleteText</code></th>
      <td><code>"[-]"</code></td>
      <td><code>String</code> *DELETE* button text.</td>
    </tr>
    <tr>
      <th scope="row"><code>allowAdd</code></th>
      <td><code>true</code></td>
      <td><code>Boolean</code> Allow to add new items to the collection.</td>
    </tr>
    <tr>
      <th scope="row"><code>allowDelete</code></th>
      <td><code>true</code></td>
      <td><code>Boolean</code> Allow to delete existing items from the collection.</td>
    </tr>
    <tr>
      <th scope="row"><code>min</code></th>
      <td><code>1</code></td>
      <td><code>Integer</code> Minimum number of collection items.</td>
    </tr>
    <tr>
      <th scope="row"><code>max</code></th>
      <td><code>100</code></td>
      <td><code>Integer</code> Maximum number of collection items.</td>
    </tr>
    <tr>
      <th scope="row"><code>onAdded</code></th>
      <td><code>null</code></td>
      <td><code>Callback</code> Callback to be fired after an item is added to the collection.</td>
    </tr>
    <tr>
      <th scope="row"><code>onDeleted</code></th>
      <td><code>null</code></td>
      <td><code>Callback</code> Callback to be fired after an item is deleted from the collection.</td>
    </tr>
  </tbody>
</table>

## Issues
If you found an issue, please use the [Github issue tracker](https://github.com/aosmialowski/jquery-collection/issues) to report it. Please make sure to **include your browser** version in the issue comment.

## TODO
+ Examples
+ Homepage
+ Some tests