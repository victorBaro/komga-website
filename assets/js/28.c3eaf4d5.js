(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{306:function(e,o,_){"use strict";_.r(o);var a=_(10),v=Object(a.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"full-text-search"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#full-text-search"}},[e._v("#")]),e._v(" Full Text Search")]),e._v(" "),o("p",[e._v("Komga leverages "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Full-text_search",target:"_blank",rel:"noopener noreferrer"}},[e._v("Full Text Search"),o("OutboundLink")],1),e._v(" (FTS hereafter) to provide relevant results from your libraries.")]),e._v(" "),o("ul",[o("li",[e._v("FTS will order results by relevance")]),e._v(" "),o("li",[e._v("FTS is case-insensitive")]),e._v(" "),o("li",[e._v("When searching with CJK characters (Chinese, Japanese, Korean), a minimum of 2 characters is required.")]),e._v(" "),o("li",[e._v("The order of words is not important: "),o("code",[e._v("batman robin")]),e._v(" will match "),o("code",[e._v("Robin & Batman")])]),e._v(" "),o("li",[e._v("To search by words in order, enclose your search in "),o("code",[e._v('"')]),e._v(": "),o("code",[e._v('"white knight"')]),e._v(" will not match "),o("code",[e._v("knight white")]),e._v(" nor "),o("code",[e._v("white and knight")])]),e._v(" "),o("li",[e._v("By default, the search will match the item title. For Books, the ISBN will also be matched by default.")]),e._v(" "),o("li",[e._v("You can use the "),o("code",[e._v("AND")]),e._v(", "),o("code",[e._v("OR")]),e._v(" and "),o("code",[e._v("NOT")]),e._v(" operators (UPPERCASE) to build complex queries:\n"),o("ul",[o("li",[o("code",[e._v("batman NOT publisher:dc")]),e._v(" will match all "),o("code",[e._v("Batman")]),e._v(" series not published by "),o("em",[e._v("DC Comics")])]),e._v(" "),o("li",[o("code",[e._v("batman OR robin")]),e._v(" will match "),o("code",[e._v("Batman")]),e._v(" or "),o("code",[e._v("Robin")])]),e._v(" "),o("li",[o("code",[e._v("batman AND (robin OR superman)")]),e._v(" will match "),o("code",[e._v("Superman & Batman")]),e._v(" and "),o("code",[e._v("Batman & Robin")])]),e._v(" "),o("li",[o("code",[e._v("writer:remender penciller:murphy")])])])]),e._v(" "),o("li",[e._v("You can perform range queries using the "),o("code",[e._v("[a TO b]")]),e._v(" syntax. Example: "),o("code",[e._v("release_date:[1990 TO 2000]")]),e._v(". Note that the matching is lexicographic, not numerical. You can also use wildcards: "),o("code",[e._v("release_date:[2010 TO *]")]),e._v(".")])]),e._v(" "),o("p",[e._v("Some extra fields are available for search using the "),o("code",[e._v("field:search")]),e._v(" syntax, see after.")]),e._v(" "),o("h3",{attrs:{id:"series-additional-fields"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#series-additional-fields"}},[e._v("#")]),e._v(" Series additional fields")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("publisher")]),e._v(". Example: "),o("code",[e._v("publisher:vertigo")])]),e._v(" "),o("li",[o("code",[e._v("status")]),e._v(" "),o("ul",[o("li",[e._v("Possible values: "),o("code",[e._v("ongoing")]),e._v(", "),o("code",[e._v("ended")]),e._v(", "),o("code",[e._v("hiatus")]),e._v(", "),o("code",[e._v("abandoned")])]),e._v(" "),o("li",[e._v("Example: "),o("code",[e._v("status:hiatus")])])])]),e._v(" "),o("li",[o("code",[e._v("reading_direction")]),e._v(" "),o("ul",[o("li",[e._v("Possible values: "),o("code",[e._v("left_to_right")]),e._v(", "),o("code",[e._v("right_to_left")]),e._v(", "),o("code",[e._v("vertical")]),e._v(", "),o("code",[e._v("webtoon")])]),e._v(" "),o("li",[e._v("Example: "),o("code",[e._v("reading_direction:right_to_left")])])])]),e._v(" "),o("li",[o("code",[e._v("age_rating")]),e._v(". Example: "),o("code",[e._v("age_rating:12")])]),e._v(" "),o("li",[o("code",[e._v("language")]),e._v(". Example: "),o("code",[e._v("language:fr")])]),e._v(" "),o("li",[o("code",[e._v("tag")]),e._v(" will search any tag, whether it is set at Series or Book level. Example: "),o("code",[e._v("tag:action")])]),e._v(" "),o("li",[o("code",[e._v("series_tag")]),e._v(" will search series tags only")]),e._v(" "),o("li",[o("code",[e._v("book_tag")]),e._v(" will search book tags only")]),e._v(" "),o("li",[o("code",[e._v("genre")]),e._v(". Example: "),o("code",[e._v("genre:action")])]),e._v(" "),o("li",[o("code",[e._v("author")]),e._v(" will search authors with any role. Example: "),o("code",[e._v("author:(sean murphy)")]),e._v(" "),o("ul",[o("li",[e._v("You can also search by specific role. Example: "),o("code",[e._v("writer:remender")])]),e._v(" "),o("li",[e._v("Possible role values are: "),o("code",[e._v("writer")]),e._v(", "),o("code",[e._v("penciller")]),e._v(", "),o("code",[e._v("letterer")]),e._v(", "),o("code",[e._v("inker")]),e._v(", "),o("code",[e._v("editor")]),e._v(", "),o("code",[e._v("cover")]),e._v(", "),o("code",[e._v("colorist")])])])]),e._v(" "),o("li",[o("code",[e._v("book_count")]),e._v(", which is the number of books present in that Series. Example: "),o("code",[e._v("book_count:1")])]),e._v(" "),o("li",[o("code",[e._v("total_book_count")]),e._v(". Example: "),o("code",[e._v("total_book_count:100")])]),e._v(" "),o("li",[o("code",[e._v("release_date")]),e._v(" will search by year released. Example: "),o("code",[e._v("release_date:1999")])]),e._v(" "),o("li",[o("code",[e._v("deleted")]),e._v(" will search soft-deleted series. Example: "),o("code",[e._v("deleted:true")]),e._v(" or "),o("code",[e._v("deleted:false")])]),e._v(" "),o("li",[o("code",[e._v("complete")]),e._v(" will search complete series, ie series where the "),o("em",[e._v("total book counts")]),e._v(" (from metadata) is equals to the actual book counts (number of files). Example: "),o("code",[e._v("complete:true")]),e._v(" or "),o("code",[e._v("complete:false")])])]),e._v(" "),o("h3",{attrs:{id:"book-additional-fields"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#book-additional-fields"}},[e._v("#")]),e._v(" Book additional fields")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("tag")]),e._v(" will search any tag. Example: "),o("code",[e._v('tag:"double pages"')])]),e._v(" "),o("li",[o("code",[e._v("author")]),e._v(" will search authors with any role. Example: "),o("code",[e._v("author:(sean murphy)")]),e._v(" "),o("ul",[o("li",[e._v("You can also search by specific role. Example: "),o("code",[e._v("writer:remender")])]),e._v(" "),o("li",[e._v("Possible role values are: "),o("code",[e._v("writer")]),e._v(", "),o("code",[e._v("penciller")]),e._v(", "),o("code",[e._v("letterer")]),e._v(", "),o("code",[e._v("inker")]),e._v(", "),o("code",[e._v("editor")]),e._v(", "),o("code",[e._v("cover")]),e._v(", "),o("code",[e._v("colorist")])])])]),e._v(" "),o("li",[o("code",[e._v("release_date")]),e._v(" will search by year released. Example: "),o("code",[e._v("release_date:1999")])]),e._v(" "),o("li",[o("code",[e._v("status")]),e._v(" "),o("ul",[o("li",[e._v("Possible values: "),o("code",[e._v("ready")]),e._v(", "),o("code",[e._v("unknown")]),e._v(", "),o("code",[e._v("error")]),e._v(", "),o("code",[e._v("unsupported")]),e._v(", "),o("code",[e._v("outdated")])]),e._v(" "),o("li",[e._v("Example: "),o("code",[e._v("status:(error OR unsupported)")])])])]),e._v(" "),o("li",[o("code",[e._v("deleted")]),e._v(" will search soft-deleted books. Example: "),o("code",[e._v("deleted:true")]),e._v(" or "),o("code",[e._v("deleted:false")])])])])}),[],!1,null,null,null);o.default=v.exports}}]);