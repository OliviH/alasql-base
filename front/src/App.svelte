<script>
	import {postJSON} from './function/fetcher'
	let title = `Test DATAS 🎀`
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main>
	<h1><a href="/"><svg width="32" height="32" viewBox="0 0 16 16" id="house-heart"><path fill-rule="evenodd" d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5zM13 7.207l-5-5-5 5V13.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7.207zm-5-.225C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982z"></path></svg></a> Bonjour</h1>
	<form>
		<div class="row">
		  <div class="six columns">
			<label for="exampleEmailInput">Your email</label>
			<input class="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput">
		  </div>
		  <div class="six columns">
			<label for="exampleRecipientInput">Reason for contacting</label>
			<select class="u-full-width" id="exampleRecipientInput">
			  <option value="Option 1">Questions</option>
			  <option value="Option 2">Admiration</option>
			  <option value="Option 3">Can I get your number?</option>
			</select>
		  </div>
		</div>
		<label for="exampleMessage">Message</label>
		<textarea class="u-full-width" placeholder="Hi Dave …" id="exampleMessage"></textarea>
		<label class="example-send-yourself-copy">
		  <input type="checkbox">
		  <span class="label-body">Send a copy to yourself</span>
		</label>
		<input class="button-primary" type="submit" value="Submit">
	  </form>
</main>

<style>
	main {
		padding: 1em;
		width: min(100% - 2em, 1440px); 
		margin: 0 auto;
	}

</style>