# {{title}}

> Run start date: {{startDate}}
> Duration: {{duration}}s

## Tests run stats

- 📚 total tests: {{totalTests}}

- ✔️ passed: {{passedTestsCount}}

- ❌ failed: {{failedTestsCount}}

- 🔜 skipped: {{skippedTestsCount}}

- ⚠️ skipped by Cypress: {{skippedCypressTestsCount}}

- ❇️ other: {{otherTestsCount}}

{{#passedExists}}
## Passed tests

<details>
<summary>Click to reveal</summary>
<article>
  {{#passedTests}}
  ✔️ - Path: {{path}}, test: {{title}}
  {{/passedTests}}
</article>
</details>
{{/passedExists}}

{{#failedExists}}
## Failed tests

<details>
<summary>Click to reveal</summary>
<article>
  {{#failedTests}}💢 - Path: {{path}}, test: {{title}}

```diff
  {{err.message}}
```

{{/failedTests}}
</article>
</details>
{{/failedExists}}

{{#skippedExists}}
## Skipped tests

<details>
<summary>Click to reveal</summary>
<article>
  {{#skippedTests}}🔜 - Path: {{path}}, test: {{title}}{{/skippedTests}}
</article>
</details>
{{/skippedExists}}

{{#skippedCypressExists}}
## Skipped tests by Cypress

<details>
<summary>Click to reveal</summary>
<article>
  {{#skippedCypress}}⚠️ - Path: {{path}}, test: {{title}}{{/skippedCypress}}
</article>
</details>
{{/skippedCypressExists}}
