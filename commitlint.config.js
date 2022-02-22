module.exports = {
    rules: {
        'task-name-pattern': [2, 'always'],
      },
      plugins: [
        {
          rules: {
            'task-name-pattern': (commit) => {
              const {header} = commit;
              console.log(1);
              return [
                /\b\w*\-\d*[\.|\:]\s{0,1}[\w|\s]*\b/.test(header),
                `Your subject should contain pattern name message`,
              ];
            },
          },
        },
      ],
}
